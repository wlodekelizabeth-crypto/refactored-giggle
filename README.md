# Freshly Modern UAE website

A simple, mobile-friendly website for Freshly Modern UAE: candle and soap making workshops, handmade candles, natural soaps and gift boxes, with all bookings through WhatsApp.

No coding tools needed. It's plain HTML, CSS and JavaScript, so it works on any host.

## Folder map

```
index.html        The page layout and fixed text (hero, about, FAQ)
css/styles.css    Colours and design (brand colours are at the very top)
js/content.js     ✏️ Workshops, prices, shop items, gallery, links, deposit policy
js/main.js        Builds the page from content.js (no need to touch)
images/           All photos
```

## Everyday updates (all in `js/content.js`)

**Add a new workshop:** copy one `{ ... },` block inside `WORKSHOPS`, paste it below, and change the details.

```js
{
  title: "Floral Candle Workshop",
  date: "2027-01-16",          // YYYY-MM-DD, weekday is added for you
  time: "11:00 am to 1:30 pm",
  location: "Dubai studio",
  price: 350,                  // AED, numbers only
  seats: 8,
  status: "open",              // "open", "few" or "full"
  image: "images/floral-candles.jpg",
  description: "One or two lines about the workshop."
},
```

- Past workshops hide themselves the day after, so there's nothing to delete in a rush.
- `"few"` shows an "Only a few seats left" badge.
- `"full"` swaps the booking button for "Join the waiting list".
- Each **Book on WhatsApp** button opens WhatsApp with the workshop name, date and time already typed out.

**Change prices or shop items:** edit the `PRODUCTS` list.

**Add photos:** put the photo in `images/` (a short name with no spaces, like `eid-box.jpg`) and type that name in `content.js`.

**Social links:** paste the Facebook, TikTok and Snapchat links into the `SITE` section at the top. Until then those icons show faded and don't go anywhere.

**Deposit and cancellation wording:** edit `SITE.deposit`.

**About text and FAQ:** edit them directly in `index.html` (search for "Meet the hands" or "Questions we hear a lot").

## Putting it online (free)

**Netlify (easiest):** go to app.netlify.com/drop and drag this whole folder onto the page. You get a live link in seconds and can connect a custom domain later.

**GitHub Pages:** in the repository go to Settings → Pages, choose the `main` branch and `/ (root)`, and save.

After any edit, upload the folder again (Netlify) or commit the change (GitHub) and the site updates.
