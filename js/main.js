/* Builds the page from js/content.js. You normally don't need to edit this file. */
(function () {
  "use strict";

  var waBase = "https://wa.me/" + SITE.whatsappNumber + "?text=";

  function waLink(message) {
    return waBase + encodeURIComponent(message);
  }

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  var waIcon = '<svg class="icon" aria-hidden="true"><use href="#i-whatsapp"/></svg>';

  // ---- Social / contact links ----
  var links = {
    whatsapp: SITE.whatsappLink,
    instagram: SITE.instagram,
    facebook: SITE.facebook,
    tiktok: SITE.tiktok,
    snapchat: SITE.snapchat
  };
  document.querySelectorAll("[data-link]").forEach(function (el) {
    var url = links[el.getAttribute("data-link")];
    if (!url || url === "#") {
      el.classList.add("is-placeholder");
      el.setAttribute("href", "#");
      el.removeAttribute("target");
      el.title = "Coming soon";
    } else {
      el.setAttribute("href", url);
    }
  });
  document.querySelectorAll("[data-wa-message]").forEach(function (el) {
    el.setAttribute("href", waLink(el.getAttribute("data-wa-message")));
  });
  document.querySelectorAll("[data-text]").forEach(function (el) {
    el.textContent = SITE[el.getAttribute("data-text")] || "";
  });

  // ---- Workshop styles ----
  document.getElementById("workshop-list").innerHTML = WORKSHOPS.map(function (w) {
    return (
      '<article class="workshop-card">' +
        '<div class="workshop-img">' +
          '<img src="' + escapeHtml(w.image) + '" alt="' + escapeHtml(w.title) + '" loading="lazy">' +
        "</div>" +
        '<div class="workshop-body">' +
          "<h3>" + escapeHtml(w.title) + "</h3>" +
          "<p>" + escapeHtml(w.description) + "</p>" +
          '<div class="workshop-foot">' +
            '<a class="btn btn-wa btn-block" target="_blank" rel="noopener" href="' +
              waLink("Hi Freshly Modern! When is your next " + w.title + " workshop? My name is ") +
              '">' + waIcon + "Ask about the next date</a>" +
          "</div>" +
        "</div>" +
      "</article>"
    );
  }).join("");

  // ---- Deposit info ----
  var d = SITE.deposit;
  document.getElementById("deposit-list").innerHTML = [
    "A <strong>" + escapeHtml(d.amount) + " deposit</strong> holds your seat. We accept " + escapeHtml(d.method) + ".",
    "We'll send the payment details on WhatsApp. Reply with a screenshot and your seat is confirmed.",
    "The rest is paid " + escapeHtml(d.balanceDue) + ".",
    escapeHtml(d.changes),
    escapeHtml(d.refunds)
  ].map(function (t) { return "<li>" + t + "</li>"; }).join("");

  // ---- Products ----
  document.getElementById("product-list").innerHTML = PRODUCTS.map(function (p) {
    return (
      '<article class="product-card">' +
        '<img src="' + escapeHtml(p.image) + '" alt="' + escapeHtml(p.title) + '" loading="lazy">' +
        '<div class="product-body">' +
          "<h3>" + escapeHtml(p.title) + "</h3>" +
          "<p>" + escapeHtml(p.description) + "</p>" +
          '<a class="text-link" target="_blank" rel="noopener" href="' +
            waLink("Hi Freshly Modern! I'm interested in your " + p.title + ". Could you share what's available and the prices?") +
            '">Ask for prices on WhatsApp →</a>' +
        "</div>" +
      "</article>"
    );
  }).join("");

  // ---- Gallery + lightbox ----
  var gList = document.getElementById("gallery-list");
  gList.innerHTML = GALLERY.map(function (g) {
    return '<button class="gallery-item" type="button"><img src="' + escapeHtml(g.image) +
      '" alt="' + escapeHtml(g.alt) + '" loading="lazy"></button>';
  }).join("");

  var lightbox = document.getElementById("lightbox");
  var lbImg = lightbox.querySelector("img");
  gList.addEventListener("click", function (e) {
    var btn = e.target.closest(".gallery-item");
    if (!btn) return;
    var img = btn.querySelector("img");
    lbImg.src = img.src;
    lbImg.alt = img.alt;
    if (lightbox.showModal) lightbox.showModal();
  });
  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox || e.target.classList.contains("lightbox-close")) lightbox.close();
  });

  // ---- Mobile menu ----
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.getElementById("main-nav");
  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  nav.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  document.getElementById("year").textContent = new Date().getFullYear();
})();
