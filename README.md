# KVI Websites — Simple Business Website (Static)

This is a fast, mobile‑friendly static website for **KVI Websites** with:
- A homepage (index.html)
- A **Request a Quote** page (quote.html) with a quote estimator
- A **Netlify-ready** contact form + quote form
- A thank-you page (thank-you.html)

## Quick start (view locally)
1. Download the files and unzip.
2. Open `index.html` in your browser.

For the smoothest local dev experience:
- Use VS Code + the “Live Server” extension, or
- Run any static server.

Example with Python:
```bash
python -m http.server 8080
```
Then open http://localhost:8080

## Deploy options
### Option A: Netlify (recommended for forms)
1. Create a Netlify account
2. Drag-and-drop the folder into Netlify
3. Netlify will detect the forms automatically (`data-netlify="true"`)

Submissions will appear in Netlify → Site → **Forms**.

### Option B: Formspree (works anywhere)
1. Create a Formspree form
2. Replace the `action="/thank-you.html"` on each form with your Formspree endpoint.
3. Keep the field names as-is.

### Option C: Custom backend
You can change each form `action` to your API endpoint (e.g., `/api/quote`) and process submissions on your server.

## Customize content
- Phone number: already set to **1 (702) 370-8827**
- Edit text in:
  - `index.html`
  - `quote.html`
- Update starting prices in:
  - `index.html` (Pricing section)
  - `quote.js` (base + add-ons numbers)

## Files
- `index.html` — homepage
- `quote.html` — quote page + estimator
- `styles.css` — styling
- `script.js` — mobile nav + footer year
- `quote.js` — estimator logic + hidden fields for quote form
- `thank-you.html` — confirmation page
- `assets/favicon.svg` — simple favicon

## Notes
- The estimator is an **estimate** only. Your final pricing is still yours to decide.
- If you want a logo, brand colors, or a portfolio section, I can add that too.
