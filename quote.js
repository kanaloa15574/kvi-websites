/* KVI Websites — quote.js
   Quote estimator + preselect package from URL.
*/

(function () {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const pkgEl = document.getElementById("pkg");
  const pagesEl = document.getElementById("pages");
  const estimateEl = document.getElementById("estimate");
  const addonEls = Array.from(document.querySelectorAll("[data-addon]"));

  const hidden = {
    pkg: document.getElementById("est_package"),
    pages: document.getElementById("est_pages"),
    addons: document.getElementById("est_addons"),
    range: document.getElementById("est_range"),
  };

  const money = (n) => n.toLocaleString(undefined, { maximumFractionDigits: 0 });

  const base = {
    starter: { min: 299, max: 299, includedPages: 5, extraMin: 75, extraMax: 120 },
    growth:  { min: 599, max: 599, includedPages: 10, extraMin: 90, extraMax: 150 },
  };

  const addons = {
    seo:     { min: 75,  max: 175, label: "SEO setup" },
    booking: { min: 50,  max: 125, label: "Booking" },
    logo:    { min: 75,  max: 200, label: "Logo refresh" },
  };

  function getSelectedAddons() {
    return addonEls.filter(x => x.checked).map(x => x.value);
  }

  function calcEstimate() {
    const pkg = pkgEl.value;
    const pages = parseInt(pagesEl.value, 10);
    const b = base[pkg];

    let min = b.min;
    let max = b.max;

    const extraPages = Math.max(0, pages - b.includedPages);
    min += extraPages * b.extraMin;
    max += extraPages * b.extraMax;

    const selected = getSelectedAddons();
    for (const key of selected) {
      const a = addons[key];
      if (!a) continue;
      min += a.min;
      max += a.max;
    }

    const range = (min === max)
      ? `$${money(min)}`
      : `$${money(min)} – $${money(max)}`;
    estimateEl.textContent = range;

    if (hidden.pkg) hidden.pkg.value = pkg;
    if (hidden.pages) hidden.pages.value = String(pages);
    if (hidden.addons) hidden.addons.value = selected.join(", ");
    if (hidden.range) hidden.range.value = range;
  }

  // URL param: ?package=starter|growth
  const params = new URLSearchParams(window.location.search);
  const pre = params.get("package");
  if (pre && base[pre]) pkgEl.value = pre;

  // Run once and attach listeners
  calcEstimate();
  pkgEl.addEventListener("change", calcEstimate);
  pagesEl.addEventListener("change", calcEstimate);
  addonEls.forEach(el => el.addEventListener("change", calcEstimate));
})();
