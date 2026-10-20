# Freshly Modern UAE website

A simple, mobile-friendly website for Freshly Modern UAE: candle and soap making workshops, handmade candles, natural soaps and gift boxes, with all bookings through WhatsApp.

No coding tools needed. It's plain HTML, CSS and JavaScript, so it works on any host.

## Folder map

```
index.html        The page layout and fixed text (hero, about, FAQ)
css/styles.css    Colours and design (brand colours are at the very top)
js/content.js     ✏️ Workshop styles, shop items, gallery, links, deposit policy
js/main.js        Builds the page from content.js (no need to touch)
images/           All photos
```

## Everyday updates (all in `js/content.js`)

**Workshop dates** are announced on Instagram, so the website never needs updating when a new date opens. The site shows the craft styles you teach and sends people to Instagram for dates.

**Add a new craft style:** copy one `{ ... },` block inside `WORKSHOPS`, paste it below, and change the details.

```js
{
  title: "Resin Coasters",
  image: "images/resin-coasters.jpg",
  description: "One or two lines about the workshop."
},
```

Each card's **Ask about the next date** button opens WhatsApp with "When is your next [workshop] workshop?" already typed out.

**Change shop items:** edit the `PRODUCTS` list. Prices aren't shown on the site. Each item has an **Prices on WhatsApp** link instead.

**Add photos:** put the photo in `images/` (a short name with no spaces, like `eid-box.jpg`) and type that name in `content.js`.

**Social links:** Instagram, Facebook, TikTok and WhatsApp are set in the `SITE` section at the top. Paste the Snapchat link there when it's ready. Until then that icon shows faded and doesn't go anywhere.

**Deposit and cancellation wording:** edit `SITE.deposit`.

**About text and FAQ:** edit them directly in `index.html` (search for "Meet the hands" or "Questions we hear a lot").

## Putting it online (free)

**Netlify (easiest):** go to app.netlify.com/drop and drag this whole folder onto the page. You get a live link in seconds and can connect a custom domain later.

**GitHub Pages:** in the repository go to Settings → Pages, choose the `main` branch and `/ (root)`, and save.

After any edit, upload the folder again (Netlify) or commit the change (GitHub) and the site updates.
