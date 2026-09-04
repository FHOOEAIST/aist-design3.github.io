/* AIST site behaviour: header, collapsible listings, galleries, project filter. */
(function () {
  "use strict";

  /* ------------------------------------------------------------------ header */
  function initHeader() {
    var header = document.querySelector(".site-header");
    if (!header) return;

    var toggle = header.querySelector(".nav-toggle");
    if (toggle) {
      toggle.addEventListener("click", function () {
        var open = header.classList.toggle("nav-open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
      });

      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && header.classList.contains("nav-open")) {
          header.classList.remove("nav-open");
          toggle.setAttribute("aria-expanded", "false");
          toggle.focus();
        }
      });
    }

    function onScroll() {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* -------------------------------------------------------- collapsibles */
  // Single source of truth for an entry's open state: the content visibility,
  // the `open` class the chevron rotates off, and the button's aria-expanded
  // all move together.
  function setListingExpanded(item, expanded) {
    var content = item.querySelector(".listing-content");
    var toggle = item.querySelector(".listing-toggle");
    if (content) content.classList.toggle("closed", !expanded);
    item.classList.toggle("open", expanded);
    if (toggle) toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
  }

  // Auto-expand listing items when navigated via hash anchor
  function handleHashTarget() {
    var hash = window.location.hash;
    if (!hash) return;
    // Not every hash is an element id -- the publications filter parks its
    // state in "#cat=...", which is not a valid selector.
    var target;
    try {
      target = document.querySelector(hash);
    } catch (e) {
      return;
    }
    if (!target) return;
    var item = target.closest(".listing-item") || target;
    if (item.classList.contains("collapsible")) {
      setListingExpanded(item, true);
    }
  }

  function initCollapsibles() {
    var items = document.querySelectorAll(".listing-item.collapsible");
    items.forEach(function (item) {
      var toggle = item.querySelector(".listing-toggle");
      var content = item.querySelector(".listing-content");
      if (!toggle || !content) return;

      setListingExpanded(item, false);

      toggle.addEventListener("click", function () {
        setListingExpanded(item, content.classList.contains("closed"));
      });
    });

    // Collapsing everything above would undo an anchor the page was opened on,
    // so re-apply it once the entries are wired up.
    handleHashTarget();
    window.addEventListener("hashchange", handleHashTarget);
  }

  /* ------------------------------------------------------------ galleries */
  function initGalleries() {
    var galleries = document.querySelectorAll(".gallery");
    if (galleries.length === 0) return;

    var lightbox = document.createElement("div");
    lightbox.className = "gallery-lightbox";
    lightbox.innerHTML =
      '<span class="gallery-lightbox-close" aria-label="Close">&times;</span>' +
      '<span class="gallery-lightbox-nav gallery-lightbox-prev">&#10094;</span>' +
      '<img class="gallery-lightbox-img" src="" alt="">' +
      '<span class="gallery-lightbox-nav gallery-lightbox-next">&#10095;</span>';
    document.body.appendChild(lightbox);

    var lightboxImg = lightbox.querySelector(".gallery-lightbox-img");
    var closeBtn = lightbox.querySelector(".gallery-lightbox-close");
    var prevBtn = lightbox.querySelector(".gallery-lightbox-prev");
    var nextBtn = lightbox.querySelector(".gallery-lightbox-next");

    var currentImages = [];
    var currentIndex = 0;

    function showLightbox(index) {
      lightboxImg.src = currentImages[index].src;
      currentIndex = index;
      lightbox.classList.add("active");
      document.body.style.overflow = "hidden";
    }

    function closeLightbox() {
      lightbox.classList.remove("active");
      document.body.style.overflow = "";
    }

    function nextImage() {
      currentIndex = (currentIndex + 1) % currentImages.length;
      lightboxImg.src = currentImages[currentIndex].src;
    }

    function prevImage() {
      currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
      lightboxImg.src = currentImages[currentIndex].src;
    }

    function fitGallery(gallery, images) {
      var containerWidth = gallery.offsetWidth;
      if (containerWidth === 0) return;

      var viewportCap = window.innerHeight * 0.8;
      var maxHeight = 0;
      var hasAny = false;

      images.forEach(function (img) {
        if (img.naturalWidth > 0 && img.naturalHeight > 0) {
          var scaledHeight = (img.naturalHeight / img.naturalWidth) * containerWidth;
          maxHeight = Math.max(maxHeight, scaledHeight);
          hasAny = true;
        }
      });

      if (hasAny) {
        gallery.style.minHeight = Math.min(maxHeight, viewportCap) + "px";
      }
    }

    var galleryData = [];

    galleries.forEach(function (gallery) {
      var images = Array.prototype.slice.call(gallery.querySelectorAll("img"));
      if (images.length === 0) return;

      var galleryIndex = 0;

      var prevNav = document.createElement("button");
      prevNav.className = "gallery-nav gallery-nav-prev";
      prevNav.innerHTML = "&#10094;";
      prevNav.setAttribute("aria-label", "Previous image");

      var nextNav = document.createElement("button");
      nextNav.className = "gallery-nav gallery-nav-next";
      nextNav.innerHTML = "&#10095;";
      nextNav.setAttribute("aria-label", "Next image");

      var counter = document.createElement("div");
      counter.className = "gallery-counter";

      gallery.appendChild(prevNav);
      gallery.appendChild(nextNav);
      gallery.appendChild(counter);

      function updateGallery() {
        images.forEach(function (img, idx) {
          img.classList.toggle("active", idx === galleryIndex);
        });
        counter.textContent = galleryIndex + 1 + " / " + images.length;
        prevNav.style.visibility = images.length > 1 ? "visible" : "hidden";
        nextNav.style.visibility = images.length > 1 ? "visible" : "hidden";
      }

      prevNav.addEventListener("click", function (e) {
        e.stopPropagation();
        galleryIndex = (galleryIndex - 1 + images.length) % images.length;
        updateGallery();
      });

      nextNav.addEventListener("click", function (e) {
        e.stopPropagation();
        galleryIndex = (galleryIndex + 1) % images.length;
        updateGallery();
      });

      images.forEach(function (img, index) {
        img.addEventListener("click", function () {
          currentImages = images;
          showLightbox(index);
        });
        if (img.complete) {
          fitGallery(gallery, images);
        } else {
          img.addEventListener("load", function () { fitGallery(gallery, images); });
          img.addEventListener("error", function () { fitGallery(gallery, images); });
        }
      });

      updateGallery();
      fitGallery(gallery, images);
      galleryData.push({ gallery: gallery, images: images });
    });

    var resizeTimeout;
    window.addEventListener("resize", function () {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(function () {
        galleryData.forEach(function (d) { fitGallery(d.gallery, d.images); });
      }, 150);
    });

    closeBtn.addEventListener("click", closeLightbox);
    prevBtn.addEventListener("click", prevImage);
    nextBtn.addEventListener("click", nextImage);

    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener("keydown", function (e) {
      if (!lightbox.classList.contains("active")) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    });
  }

  /* ------------------------------------------------------ project filter */
  // Pills on the projects listing: show only cards of one research area.
  // State is kept in the hash ("#area=cv") so a filtered view can be linked.
  function initProjectFilter() {
    var root = document.querySelector("[data-project-filter]");
    if (!root) return;

    var buttons = Array.prototype.slice.call(root.querySelectorAll("[data-filter]"));
    var cards = Array.prototype.slice.call(document.querySelectorAll(".project-card[data-category]"));
    var groups = Array.prototype.slice.call(document.querySelectorAll("[data-project-group]"));

    function apply(filter) {
      buttons.forEach(function (b) {
        var on = b.getAttribute("data-filter") === filter;
        b.classList.toggle("is-active", on);
        b.setAttribute("aria-pressed", on ? "true" : "false");
      });

      cards.forEach(function (card) {
        var show = filter === "all" || card.getAttribute("data-category") === filter;
        card.hidden = !show;
      });

      groups.forEach(function (group) {
        var visible = group.querySelectorAll(".project-card:not([hidden])").length;
        var empty = group.querySelector("[data-empty]");
        if (empty) empty.hidden = visible > 0;
      });
    }

    buttons.forEach(function (b) {
      b.addEventListener("click", function () {
        var filter = b.getAttribute("data-filter");
        apply(filter);
        var url = filter === "all"
          ? window.location.pathname + window.location.search
          : "#area=" + filter;
        history.replaceState(null, "", url);
      });
    });

    var match = /area=([a-z0-9_-]+)/.exec(window.location.hash);
    var initial = match && buttons.some(function (b) { return b.getAttribute("data-filter") === match[1]; })
      ? match[1]
      : "all";
    apply(initial);
  }

  /* ------------------------------------------------------------ listbox */
  // Custom ARIA listbox (trigger button + option list) used by the listing
  // filters. onChange receives the selected option's data-value.
  function initListbox(control, onChange) {
    var trigger = control.querySelector(".cat-filter-trigger");
    var menu = control.querySelector(".cat-filter-menu");
    var valueEl = control.querySelector(".cat-filter-value");
    var options = Array.prototype.slice.call(menu.querySelectorAll('[role="option"]'));
    var activeIndex = 0;
    var current = options[0];

    function openMenu() {
      control.classList.add("is-open");
      trigger.setAttribute("aria-expanded", "true");
      setActive(options.indexOf(current));
      menu.focus();
    }

    function closeMenu(refocus) {
      control.classList.remove("is-open");
      trigger.setAttribute("aria-expanded", "false");
      menu.removeAttribute("aria-activedescendant");
      options.forEach(function (o) { o.classList.remove("is-active"); });
      if (refocus) trigger.focus();
    }

    function setActive(index) {
      if (index < 0) index = 0;
      if (index > options.length - 1) index = options.length - 1;
      activeIndex = index;
      options.forEach(function (o, i) { o.classList.toggle("is-active", i === index); });
      menu.setAttribute("aria-activedescendant", options[index].id);
      options[index].scrollIntoView({ block: "nearest" });
    }

    // aria-selected is the single source of truth: the CSS styles the selected
    // row off the attribute, so visual and a11y state cannot drift.
    function select(option, notify) {
      current = option;
      options.forEach(function (o) {
        o.setAttribute("aria-selected", o === option ? "true" : "false");
      });
      valueEl.textContent = option.querySelector(".cat-filter-name").textContent;
      if (notify) onChange(option.getAttribute("data-value"));
    }

    trigger.addEventListener("click", function () {
      control.classList.contains("is-open") ? closeMenu(false) : openMenu();
    });

    trigger.addEventListener("keydown", function (e) {
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        openMenu();
      }
    });

    menu.addEventListener("keydown", function (e) {
      switch (e.key) {
        case "ArrowDown": e.preventDefault(); setActive(activeIndex + 1); break;
        case "ArrowUp": e.preventDefault(); setActive(activeIndex - 1); break;
        case "Home": e.preventDefault(); setActive(0); break;
        case "End": e.preventDefault(); setActive(options.length - 1); break;
        case "Enter":
        case " ":
          e.preventDefault();
          select(options[activeIndex], true);
          closeMenu(true);
          break;
        case "Escape": e.preventDefault(); closeMenu(true); break;
        case "Tab": closeMenu(false); break;
      }
    });

    options.forEach(function (option) {
      option.addEventListener("click", function () {
        select(option, true);
        closeMenu(true);
      });
    });

    document.addEventListener("click", function (e) {
      if (!control.contains(e.target)) closeMenu(false);
    });

    return {
      value: function () { return current.getAttribute("data-value"); },
      // Select by value; unknown values fall back to the first option ("all").
      set: function (value, notify) {
        var option = options.filter(function (o) {
          return o.getAttribute("data-value") === value;
        })[0] || options[0];
        select(option, notify);
      }
    };
  }

  /* ----------------------------------------------------- listing filter */
  // Publications and theses: one listbox per facet (category, year, type).
  // "cat" matches against the entry's space-separated data-categories list,
  // every other facet against data-<key>. An entry is shown when it matches
  // every facet; year headings without visible entries are hidden. State is
  // mirrored into the hash (#cat=ml&year=2024).
  function initListingFilter() {
    var root = document.querySelector("[data-listing-filter]");
    if (!root) return;

    var resultsEl = root.querySelector(".cat-filter-results");
    var items = Array.prototype.slice.call(document.querySelectorAll(".listing-item[data-year]"));
    var yearHeadings = Array.prototype.slice.call(document.querySelectorAll(".year-heading"));
    var boxes = {};

    items.forEach(function (item) {
      var raw = item.getAttribute("data-categories") || "";
      item.catList = raw.split(" ").filter(Boolean);
    });

    function matches(item, key, value) {
      if (value === "all") return true;
      if (key === "cat") return item.catList.indexOf(value) !== -1;
      return item.getAttribute("data-" + key) === value;
    }

    function apply() {
      var keys = Object.keys(boxes);
      var shown = 0;

      items.forEach(function (item) {
        var ok = keys.every(function (key) {
          return matches(item, key, boxes[key].value());
        });
        item.style.display = ok ? "" : "none";
        if (ok) shown++;
      });

      yearHeadings.forEach(function (heading) {
        var next = heading.nextElementSibling;
        var any = false;
        while (next && !next.classList.contains("year-heading")) {
          if (next.classList.contains("listing-item") && next.style.display !== "none") any = true;
          next = next.nextElementSibling;
        }
        heading.style.display = any ? "" : "none";
      });

      var tpl = root.getAttribute("data-results-template") || "";
      if (resultsEl) {
        resultsEl.textContent = tpl.replace("{n}", shown).replace("{total}", items.length);
      }
    }

    function syncHash() {
      var parts = [];
      Object.keys(boxes).forEach(function (key) {
        var v = boxes[key].value();
        if (v !== "all") parts.push(key + "=" + v);
      });
      // replaceState so filtering does not pile up history entries
      history.replaceState(null, "",
        parts.length ? "#" + parts.join("&") : location.pathname + location.search);
    }

    Array.prototype.slice.call(root.querySelectorAll("[data-filter-key]")).forEach(function (control) {
      var key = control.getAttribute("data-filter-key");
      boxes[key] = initListbox(control, function () {
        apply();
        syncHash();
      });
    });

    // A category badge on an entry doubles as a shortcut into that category.
    if (boxes.cat) {
      document.addEventListener("click", function (e) {
        var badge = e.target.closest ? e.target.closest(".publication-category[data-category]") : null;
        if (!badge) return;
        e.preventDefault();
        boxes.cat.set(badge.getAttribute("data-category"), false);
        apply();
        syncHash();
        root.scrollIntoView({ block: "nearest" });
      });
    }

    // Restore facets from the hash, e.g. #cat=ml&year=2024.
    Object.keys(boxes).forEach(function (key) {
      var m = new RegExp("(?:^#|&)" + key + "=([a-z0-9]+)").exec(location.hash);
      boxes[key].set(m ? m[1] : "all", false);
    });
    apply();
  }

  /* ----------------------------------------------------------- hero waves */
  // Home-page hero background: the logo's wave stroke drawn on a canvas.
  // Each wave enters at the right edge at full width, drifts to the left
  // while its pattern flows downward, and thins and fades out after
  // TRAVEL of the hero width. All waves share one wavelength and phase, so
  // their crests line up across the band. The waves are laid out edge to
  // edge with a constant GAP, so the spacing between strokes stays the same
  // while they thin out (which means a wave slows down a little as it
  // shrinks); as many waves are in flight, at evenly spaced stages of that
  // life, as fit into that distance. The static CSS tile stays as the no-JS
  // fallback and is hidden once the canvas is in place. Honours
  // prefers-reduced-motion (one still frame) and stops drawing while the
  // hero is scrolled out of view or the tab is hidden.
  // `animated_header` in _config.yml picks the mode: the home-hero-waves
  // class asks for the canvas at all (thick, animated), home-hero-animated
  // for the motion; without both the static CSS tile stays (small).
  function initHeroWaves() {
    var hero = document.querySelector(".home-hero-waves");
    if (!hero || !window.requestAnimationFrame) return;

    var canvas = document.createElement("canvas");
    canvas.className = "hero-waves";
    canvas.setAttribute("aria-hidden", "true");
    var ctx = canvas.getContext && canvas.getContext("2d");
    if (!ctx) return;
    hero.insertBefore(canvas, hero.firstChild);
    hero.classList.add("has-waves");

    var REF_WIDTH = 1400; // hero width the sizes below are designed for
    var MIN_SIZE = 0.35; // narrow heroes scale STROKE and GAP down, but not below this
    var GAP = 36; // gap between neighbouring strokes
    var LIFE = 40; // seconds from entering at the right edge until gone
    var TRAVEL = 0.7; // share of the hero width a wave crosses before it is gone
    var PERIOD = 480; // wave length in px (the logo tile has 240)
    var AMP = 20; // horizontal swing of a full-size stroke
    var STROKE = 150; // width of a freshly entered stroke
    var ALPHA = 0.07; // opacity of a freshly entered stroke
    var FLOW = PERIOD / 16; // downward drift, px per second (one period per 16 s)
    var MIN_SCALE = 0.12; // share of STROKE a wave has thinned to when it vanishes
    var STILL_AT = LIFE * 0.37; // moment shown as the reduced-motion still frame

    var W = 0;
    var H = 0;
    var stroke = STROKE; // stroke width and gap for the current hero width
    var gap = GAP;
    var count = 0; // waves in flight

    function resize() {
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = hero.clientWidth;
      H = hero.clientHeight;
      // keep the look proportional on narrow (mobile) heroes
      var k = Math.min(1, Math.max(MIN_SIZE, W / REF_WIDTH));
      stroke = STROKE * k;
      gap = GAP * k;
      // average stroke width over a wave's life plus the gap is the distance
      // one wave occupies; fill TRAVEL of the width with them
      count = Math.max(2, Math.round((TRAVEL * W) / ((stroke * (1 + MIN_SCALE)) / 2 + gap)));
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function strokeWave(cx, phase) {
      var step = PERIOD / 32;
      ctx.beginPath();
      for (var y = -step; y <= H + step; y += step) {
        var x = cx + AMP * Math.sin(((y - phase) * 2 * Math.PI) / PERIOD);
        if (y === -step) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }

    function draw(t) {
      ctx.clearRect(0, 0, W, H);
      ctx.strokeStyle = "#fff";
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      var phase = (t * FLOW) % PERIOD;
      for (var i = 0; i < count; i++) {
        var p = (t / LIFE + i / count) % 1; // 0 = entering at the right, 1 = gone
        var scale = 1 - (1 - MIN_SCALE) * p;
        var alpha = ALPHA * (1 - p);
        if (alpha <= 0.002) continue;
        // distance travelled so far: the widths and gaps of every stage
        // already passed (integral of stroke width + gap over p)
        var dist = count * ((stroke + gap) * p - (stroke * (1 - MIN_SCALE) * p * p) / 2);
        var cx = W + stroke / 2 + AMP - dist;
        ctx.globalAlpha = alpha;
        ctx.lineWidth = stroke * scale;
        strokeWave(cx, phase);
      }
      ctx.globalAlpha = 1;
    }

    var reduce = window.matchMedia
      ? window.matchMedia("(prefers-reduced-motion: reduce)")
      : { matches: false };
    var inView = true;
    var running = false;
    var raf = 0;
    var start = 0;

    function frame(now) {
      if (!start) start = now;
      draw((now - start) / 1000);
      raf = window.requestAnimationFrame(frame);
    }

    function update() {
      var animated = hero.classList.contains("home-hero-animated");
      var shouldRun = animated && inView && !document.hidden && !reduce.matches;
      if (shouldRun && !running) {
        running = true;
        raf = window.requestAnimationFrame(frame);
      } else if (!shouldRun && running) {
        running = false;
        window.cancelAnimationFrame(raf);
      }
      if (!running) draw(STILL_AT);
    }

    resize();
    update();

    window.addEventListener("resize", function () {
      resize();
      update();
    });
    document.addEventListener("visibilitychange", update);
    if (reduce.addEventListener) reduce.addEventListener("change", update);
    else if (reduce.addListener) reduce.addListener(update);
    if (window.IntersectionObserver) {
      new IntersectionObserver(function (entries) {
        inView = entries[0].isIntersecting;
        update();
      }).observe(hero);
    }
  }

  /* ----------------------------------------------------------- hero mosaic */
  // Home page, "tiles" design: the photo tiles of the hero mosaic take turns
  // (top right, bottom left, top right, ...) fading to a random other picture
  // from the pool in data-mosaic (JSON, built from _data/home_mosaic.yml)
  // every few seconds. A tile never shows a picture another tile is showing. Each photo tile holds two <img> layers: the
  // next picture loads into the hidden one, is faded in on top, and the old
  // one stays underneath (.is-behind) until the fade is over. Paused while
  // the tab is hidden, the mosaic is scrolled out of view, or the visitor
  // prefers reduced motion.
  function initMosaic() {
    var mosaic = document.querySelector(".tile-mosaic[data-mosaic]");
    if (!mosaic) return;

    var pool;
    try {
      pool = JSON.parse(mosaic.getAttribute("data-mosaic"));
    } catch (e) {
      return;
    }
    var tiles = Array.prototype.slice.call(mosaic.querySelectorAll(".tile-photo"));
    if (!pool || !tiles.length || pool.length <= tiles.length) return;

    var reduce = window.matchMedia
      ? window.matchMedia("(prefers-reduced-motion: reduce)")
      : { matches: false };
    var inView = true;
    var timer = null;
    var turn = 0; // index of the tile that swaps next (round robin)
    var FADE_MS = 1300;
    var MIN_WAIT = 3500;
    var EXTRA_WAIT = 4000;

    function schedule() {
      clearTimeout(timer);
      timer = setTimeout(swap, MIN_WAIT + Math.random() * EXTRA_WAIT);
    }

    function shownIndexes() {
      return tiles.map(function (tile) {
        return parseInt(tile.getAttribute("data-index"), 10);
      });
    }

    function swap() {
      if (document.hidden || !inView || reduce.matches) {
        schedule();
        return;
      }

      var tile = tiles[turn % tiles.length];
      if (tile.getAttribute("data-busy")) {
        schedule();
        return;
      }
      turn = (turn + 1) % tiles.length;
      var used = shownIndexes();
      var candidates = [];
      for (var i = 0; i < pool.length; i++) {
        if (used.indexOf(i) < 0) candidates.push(i);
      }
      if (!candidates.length) {
        schedule();
        return;
      }
      var next = candidates[Math.floor(Math.random() * candidates.length)];
      var entry = pool[next];
      var front = tile.querySelector("img.is-front");
      var back = tile.querySelector("img:not(.is-front)");
      if (!front || !back) {
        schedule();
        return;
      }

      tile.setAttribute("data-busy", "1");
      back.style.objectPosition = entry.position || "";

      function show() {
        back.onload = back.onerror = null;
        if (entry.url) tile.setAttribute("href", entry.url);
        if (entry.title) {
          tile.setAttribute("title", entry.title);
          tile.setAttribute("aria-label", entry.title);
        }
        tile.setAttribute("data-index", String(next));
        front.classList.remove("is-front");
        front.classList.add("is-behind");
        // let the browser paint the stacked state before the fade starts
        requestAnimationFrame(function () {
          back.classList.add("is-front");
        });
        setTimeout(function () {
          front.classList.remove("is-behind");
          front.removeAttribute("src");
          tile.removeAttribute("data-busy");
        }, FADE_MS);
        schedule();
      }

      function fail() {
        back.onload = back.onerror = null;
        tile.removeAttribute("data-busy");
        schedule();
      }

      back.onload = show;
      back.onerror = fail;
      back.src = entry.image;
      if (back.complete && back.naturalWidth) show();
    }

    if (window.IntersectionObserver) {
      new IntersectionObserver(function (entries) {
        inView = entries[0].isIntersecting;
      }).observe(mosaic);
    }
    document.addEventListener("visibilitychange", function () {
      if (!document.hidden) schedule();
    });

    schedule();
  }

  /* --------------------------------------------------------------- boot */
  function boot() {
    initHeader();
    initCollapsibles();
    initGalleries();
    initProjectFilter();
    initListingFilter();
    initHeroWaves();
    initMosaic();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
