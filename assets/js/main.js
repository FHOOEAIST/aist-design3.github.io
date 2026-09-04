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

  /* --------------------------------------------------------------- boot */
  function boot() {
    initHeader();
    initCollapsibles();
    initGalleries();
    initProjectFilter();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
