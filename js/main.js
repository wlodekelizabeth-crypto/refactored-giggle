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

  function parseDate(iso) {
    var p = iso.split("-");
    return new Date(+p[0], +p[1] - 1, +p[2]);
  }

  function formatDate(iso) {
    return parseDate(iso).toLocaleDateString("en-GB", {
      weekday: "long", day: "numeric", month: "long", year: "numeric"
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

  // ---- Workshops ----
  var today = new Date();
  today.setHours(0, 0, 0, 0);

  var upcoming = WORKSHOPS
    .filter(function (w) { return parseDate(w.date) >= today; })
    .sort(function (a, b) { return parseDate(a.date) - parseDate(b.date); });

  var wList = document.getElementById("workshop-list");
  if (!upcoming.length) {
    wList.innerHTML =
      '<div class="empty-state"><h3>New dates are on their way</h3>' +
      "<p>Message us and we'll let you know as soon as the next workshops open.</p>" +
      '<a class="btn btn-wa" target="_blank" rel="noopener" href="' +
      waLink("Hi Freshly Modern! Please let me know when new workshop dates are out.") +
      '">' + waIcon + "Notify me</a></div>";
  } else {
    wList.innerHTML = upcoming.map(function (w) {
      var nice = formatDate(w.date);
      var badge = "";
      var button;
      if (w.status === "full") {
        badge = '<span class="badge badge-full">Fully booked</span>';
        button = '<a class="btn btn-outline btn-block" target="_blank" rel="noopener" href="' +
          waLink("Hi Freshly Modern! " + w.title + " on " + nice + " is full. Please add me to the waiting list. My name is ") +
          '">Join the waiting list</a>';
      } else {
        if (w.status === "few") badge = '<span class="badge badge-few">Only a few seats left</span>';
        button = '<a class="btn btn-wa btn-block" target="_blank" rel="noopener" href="' +
          waLink("Hi Freshly Modern! I'd like to book the " + w.title + " on " + nice + " (" + w.time + "). My name is ") +
          '">' + waIcon + "Book on WhatsApp</a>";
      }
      return (
        '<article class="workshop-card">' +
          '<div class="workshop-img">' +
            '<img src="' + escapeHtml(w.image) + '" alt="' + escapeHtml(w.title) + '" loading="lazy">' +
            badge +
          "</div>" +
          '<div class="workshop-body">' +
            "<h3>" + escapeHtml(w.title) + "</h3>" +
            '<ul class="meta">' +
              '<li><span aria-hidden="true">📅</span>' + escapeHtml(nice) + "</li>" +
              '<li><span aria-hidden="true">🕰️</span>' + escapeHtml(w.time) + "</li>" +
              '<li><span aria-hidden="true">📍</span>' + escapeHtml(w.location) + "</li>" +
              '<li><span aria-hidden="true">👭</span>Up to ' + escapeHtml(w.seats) + " guests</li>" +
            "</ul>" +
            "<p>" + escapeHtml(w.description) + "</p>" +
            '<div class="workshop-foot">' +
              '<p class="price"><span>AED</span> ' + escapeHtml(w.price) + '<small>per person</small></p>' +
              button +
            "</div>" +
          "</div>" +
        "</article>"
      );
    }).join("");
  }

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
          '<p class="product-price">' + escapeHtml(p.price) + "</p>" +
          "<p>" + escapeHtml(p.description) + "</p>" +
          '<a class="text-link" target="_blank" rel="noopener" href="' +
            waLink("Hi Freshly Modern! I'm interested in your " + p.title + ". Could you share what's available?") +
            '">Order on WhatsApp →</a>' +
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
