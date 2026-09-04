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
  // Publications and theses: one listbox per facet (category, year). An entry
  // is shown when it matches every facet; year headings without visible
  // entries are hidden. State is mirrored into the hash (#cat=ml&year=2024).
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
      item.year = item.getAttribute("data-year");
    });

    function apply() {
      var cat = boxes.cat ? boxes.cat.value() : "all";
      var year = boxes.year ? boxes.year.value() : "all";
      var shown = 0;

      items.forEach(function (item) {
        var ok = (cat === "all" || item.catList.indexOf(cat) !== -1) &&
                 (year === "all" || item.year === year);
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

  /* --------------------------------------------------------------- boot */
  function boot() {
    initHeader();
    initCollapsibles();
    initGalleries();
    initProjectFilter();
    initListingFilter();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
