/* =========================================================
   FRESHLY MODERN UAE : WEBSITE CONTENT
   ---------------------------------------------------------
   This is the ONLY file you need to edit for everyday updates.
   Change the text between the quote marks, save, and re-upload.

   Tips
   - Keep the quote marks and the commas at the end of lines.
   - Dates use the format "YYYY-MM-DD", e.g. "2026-11-07".
     The weekday is added automatically.
   - Workshops whose date has passed hide themselves.
   - Photos live in the "images" folder. To use a new photo,
     drop it in that folder and type its file name here.
   ========================================================= */

const SITE = {
  // ---- Contact ------------------------------------------------
  whatsappNumber: "971502050335",               // digits only, with country code
  whatsappLink: "https://iwtsp.com/971502050335",
  instagram: "https://www.instagram.com/freshlymodernuae?xtok=MWRhMW5iZW0xdWswZg==",
  facebook: "#",   // TODO: paste Facebook page link
  tiktok: "#",     // TODO: paste TikTok link
  snapchat: "#",   // TODO: paste Snapchat link
  city: "Dubai, UAE",

  // ---- Deposit & policy (shown in the booking section) --------
  deposit: {
    amount: "50%",
    method: "bank transfer or payment link",
    balanceDue: "on the day of the workshop",
    changes: "Need to change your date? Tell us at least 48 hours before and we'll move your deposit to another workshop.",
    refunds: "Deposits are non-refundable, but always transferable to a friend or another date."
  }
};

/* ---- Upcoming workshops ---------------------------------------
   status: "open", "few" (only a few seats left) or "full"
   ----------------------------------------------------------------- */
const WORKSHOPS = [
  {
    title: "Floral Candle Workshop",
    date: "2026-11-07",
    time: "11:00 am to 1:30 pm",
    location: "Dubai studio",
    price: 350,
    seats: 8,
    status: "open",
    image: "images/floral-candles.jpg",
    description: "Pour and colour your own peony, rose and daisy candles in soft pastel shades. You leave with a full tray of blooms."
  },
  {
    title: "Natural Rose Soap Making",
    date: "2026-11-14",
    time: "4:00 pm to 6:00 pm",
    location: "Dubai studio",
    price: 280,
    seats: 8,
    status: "few",
    image: "images/rose-soaps.jpg",
    description: "Gentle, skin-loving soaps finished with real dried rose petals and buds. Learn the basics you can repeat at home."
  },
  {
    title: "Scented Wax Tags",
    date: "2026-11-22",
    time: "11:00 am to 1:00 pm",
    location: "Dubai studio",
    price: 220,
    seats: 10,
    status: "open",
    image: "images/wax-tags-eucalyptus.jpg",
    description: "Fragrant wax sachets with dried flowers and brass eyelets. Perfect for wardrobes, cars and little thank you gifts."
  },
  {
    title: "Candle Cake Masterclass",
    date: "2026-11-28",
    time: "3:00 pm to 6:00 pm",
    location: "Dubai studio",
    price: 420,
    seats: 6,
    status: "open",
    image: "images/candle-cake.jpg",
    description: "Our showstopper. Build a cake that's entirely candle, with macarons, berries and a touch of gold."
  },
  {
    title: "Soap Flower Bouquet",
    date: "2026-12-05",
    time: "11:00 am to 2:00 pm",
    location: "Dubai studio",
    price: 380,
    seats: 8,
    status: "open",
    image: "images/soap-flower-bouquet-gold.jpg",
    description: "Shape soap roses and peonies, brush them with gold and arrange your own keepsake bouquet."
  },
  {
    title: "Festive Gift Box Workshop",
    date: "2026-12-12",
    time: "4:00 pm to 6:30 pm",
    location: "Dubai studio",
    price: 320,
    seats: 10,
    status: "open",
    image: "images/flower-gift-box.jpg",
    description: "Make a flower box with a personal message card. Bring a friend and make one for each other."
  }
];

/* ---- Handmade collection (shop section) ----------------------- */
const PRODUCTS = [
  {
    title: "Handmade Candles",
    price: "From AED 45",
    image: "images/floral-candles.jpg",
    description: "Sculpted flower candles, candle cakes and decorative pieces, poured by hand in small batches."
  },
  {
    title: "Natural Soaps",
    price: "From AED 30",
    image: "images/rose-soaps.jpg",
    description: "Kind to skin, finished with botanicals. Lovely for your own shelf or as a guest favour."
  },
  {
    title: "Gift Boxes",
    price: "From AED 150",
    image: "images/soap-flower-bouquet-gold.jpg",
    description: "Ready to give bouquets and boxes for birthdays, new babies, Eid and thank yous. Custom cards included."
  },
  {
    title: "Scented Wax Tags & Melts",
    price: "From AED 25",
    image: "images/wax-melts-lilac.jpg",
    description: "Little fragrant touches for drawers, cars and gift wrapping. Custom wording available for events."
  }
];

/* ---- Gallery (any photos you like, in any order) -------------- */
const GALLERY = [
  { image: "images/soap-flower-bouquet-gold.jpg", alt: "Soap flower bouquet with gold brushed petals" },
  { image: "images/wax-tags-calligraphy.jpg", alt: "Wax tags with Arabic calligraphy and rose petals for an event" },
  { image: "images/scented-wax-tag.jpg", alt: "Scalloped scented wax tag with baby's breath" },
  { image: "images/candle-cake.jpg", alt: "Candle cake topped with macarons and berries" },
  { image: "images/ramadan-candle-bowl.jpg", alt: "Ramadan candle bowl with flower shaped wax" },
  { image: "images/wax-melts-lilac.jpg", alt: "Lilac wax melts with dried flowers" },
  { image: "images/flower-gift-box.jpg", alt: "Flower gift box with congratulations card" },
  { image: "images/floral-candles.jpg", alt: "Pastel peony and rose candles" }
];
