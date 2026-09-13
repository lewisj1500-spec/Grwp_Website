/* <grwp-map> — real London map (Leaflet + OpenStreetMap data via CARTO tiles).
   Pins: been / saved / going. Exposes focusArea(key) so the page can drive it. */
(function () {
  var CSS_URL = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
  var JS_URL = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
  var loading = null;

  function loadLeaflet() {
    if (window.L) return Promise.resolve(window.L);
    if (loading) return loading;
    loading = new Promise(function (resolve, reject) {
      if (!document.querySelector('link[data-grwp-leaflet]')) {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = CSS_URL;
        link.integrity = 'sha384-sHL9NAb7lN7rfvG5lfHpm643Xkcjzp4jFvuavGOndn6pjVqS6ny56CAt3nsEVT4H';
        link.crossOrigin = 'anonymous';
        link.setAttribute('data-grwp-leaflet', '');
        document.head.appendChild(link);
      }
      var s = document.querySelector('script[data-grwp-leaflet]');
      if (!s) {
        s = document.createElement('script');
        s.src = JS_URL;
        s.integrity = 'sha384-cxOPjt7s7Iz04uaHJceBmS+qpjv2JkIHNVcuOrM+YHwZOmJGBXI00mdUXEq65HTH';
        s.crossOrigin = 'anonymous';
        s.setAttribute('data-grwp-leaflet', '');
        document.head.appendChild(s);
      }
      s.addEventListener('load', function () { resolve(window.L); });
      s.addEventListener('error', reject);
      if (window.L) resolve(window.L);
    });
    return loading;
  }

  var AREAS = {
    peckham: { label: 'Peckham', centre: [51.4735, -0.0695], zoom: 14 },
    bethnal: { label: 'Bethnal Green', centre: [51.5270, -0.0550], zoom: 14 },
    stokey: { label: 'Stoke Newington', centre: [51.5620, -0.0780], zoom: 14 }
  };

  var SEEDS = [
    [0.0032, -0.0041], [-0.0027, 0.0055], [0.0051, 0.0018], [-0.0044, -0.0029], [0.0018, 0.0062],
    [-0.0062, 0.0012], [0.0039, -0.0068], [-0.0015, -0.0058], [0.0068, 0.0039], [-0.0051, 0.0048],
    [0.0009, -0.0022], [0.0024, 0.0031], [-0.0036, 0.0072], [0.0057, -0.0015], [-0.0071, -0.0044]
  ];
  var KINDS = ['been', 'saved', 'been', 'saved', 'going', 'been', 'saved', 'been', 'saved', 'been', 'saved', 'been', 'going', 'saved', 'been'];
  var NAMES = ['Corner café', 'Wine bar', 'Sunday market', 'Late pub', 'Long lunch', 'Bakery', 'Lido',
    'Bookshop', 'Record shop', 'Park loop', 'Thai canteen', 'Gallery', 'Run club', 'Bagels', 'Supper club'];

  var PLACES = [
    { g: 'peckham', k: 'been', n: 'Rye Lane coffee', a: 'Peckham', ll: [51.4718, -0.0693] },
    { g: 'peckham', k: 'been', n: 'Sunday market', a: 'Peckham', ll: [51.4752, -0.0662] },
    { g: 'peckham', k: 'saved', n: 'Bakery, corner shop', a: 'Nunhead', ll: [51.4668, -0.0561] },
    { g: 'peckham', k: 'saved', n: 'Park loop, 5k', a: 'Peckham Rye', ll: [51.4610, -0.0660] },
    { g: 'peckham', k: 'going', n: 'Long lunch', a: 'Peckham', ll: [51.4740, -0.0744] },

    { g: 'bethnal', k: 'been', n: 'Gallery, late opening', a: 'Bethnal Green', ll: [51.5273, -0.0552] },
    { g: 'bethnal', k: 'been', n: 'Flower market', a: 'Columbia Road', ll: [51.5288, -0.0708] },
    { g: 'bethnal', k: 'saved', n: 'Lido, early swim', a: 'London Fields', ll: [51.5418, -0.0605] },
    { g: 'bethnal', k: 'saved', n: 'Café, big table', a: 'Haggerston', ll: [51.5391, -0.0757] },
    { g: 'bethnal', k: 'going', n: 'Saturday run club', a: 'Marsh Lane', ll: [51.5470, -0.0393] },

    { g: 'stokey', k: 'been', n: 'Church Street table', a: 'Stoke Newington', ll: [51.5617, -0.0784] },
    { g: 'stokey', k: 'been', n: 'Reservoir walk', a: 'Woodberry Down', ll: [51.5692, -0.0879] },
    { g: 'stokey', k: 'saved', n: 'Bookshop, Sunday readings', a: 'Stoke Newington', ll: [51.5630, -0.0730] },
    { g: 'stokey', k: 'saved', n: 'Bagels, open early', a: 'Clissold', ll: [51.5600, -0.0868] },
    { g: 'stokey', k: 'going', n: 'Book club', a: 'Stoke Newington', ll: [51.5652, -0.0757] }
  ];

  var STYLE = {
    been: { fill: '#7D8F6D', r: 6, label: 'Been' },
    saved: { fill: '#D9CDB8', r: 6, label: 'Saved' },
    going: { fill: '#E76F51', r: 11, label: 'Going' }
  };

  function swatch(k) {
    var s = STYLE[k];
    return '<span style="width:' + (k === 'going' ? 13 : 10) + 'px;height:' + (k === 'going' ? 13 : 10) +
      'px;border-radius:50%;background:' + s.fill + ';display:inline-block;flex:none"></span>';
  }

  class GrwpMap extends HTMLElement {
    connectedCallback() {
      if (this._built) return;
      this._built = true;
      var self = this;
      var warm = this.getAttribute('warm') !== 'false';
      this.style.display = 'block';
      this.style.position = 'relative';
      this.style.width = '100%';
      this.style.height = this.style.height || '100%';

      var host = document.createElement('div');
      host.style.cssText = 'position:absolute;inset:0;background:#F2EDE6;';
      host.style.borderRadius = 'inherit';
      if (warm) host.style.filter = 'grayscale(1) brightness(1.08) contrast(0.82) opacity(0.92)';
      this.appendChild(host);

      var legend = document.createElement('div');
      legend.style.cssText = 'position:absolute;left:14px;bottom:14px;z-index:500;background:rgba(255,255,255,.94);' +
        'backdrop-filter:blur(6px);border:1px solid rgba(18,26,22,0.08);border-radius:16px;padding:11px 14px;' +
        'display:flex;flex-direction:column;gap:7px;font:500 12px/1 Satoshi,Arial,sans-serif;color:#121A16;';
      legend.innerHTML = ['been', 'saved', 'going'].map(function (k) {
        return '<span style="display:flex;align-items:center;gap:8px">' + swatch(k) + STYLE[k].label + '</span>';
      }).join('');
      this.appendChild(legend);

      loadLeaflet().then(function (L) {
        var map = L.map(host, { zoomControl: false, scrollWheelZoom: false, attributionControl: true });
        var credit = host.querySelector('.leaflet-control-attribution');
        if (credit) {
          credit.style.cssText = 'background:transparent;color:rgba(18,26,22,.34);font:400 9px/1 Satoshi,Arial,sans-serif;padding:0 6px 2px;box-shadow:none';
        }
        var tiles = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
          subdomains: 'ab',
          attribution: '© OpenStreetMap contributors · Humanitarian style',
          maxZoom: 19
        }).addTo(map);
        // a refused tile must never read as a broken page — drop it onto the cream canvas
        tiles.on('tileerror', function (e) {
          if (e && e.tile) { e.tile.style.display = 'none'; }
        });

        // thicken each area out so the map reads like a year of going places
        Object.keys(AREAS).forEach(function (key) {
          var c = AREAS[key].centre;
          SEEDS.forEach(function (off, i) {
            PLACES.push({
              g: key, k: KINDS[i], n: NAMES[i], a: AREAS[key].label,
              ll: [c[0] + off[0], c[1] + off[1]]
            });
          });
        });

        var markers = PLACES.map(function (p) {
          var s = STYLE[p.k];
          var m = L.circleMarker(p.ll, {
            radius: s.r, stroke: false, fillColor: s.fill, fillOpacity: 1
          }).addTo(map);
          m.bindPopup('<div style="font:600 13px/1.3 Satoshi,Arial,sans-serif;color:#121A16">' + p.n +
            '</div><div style="font:400 12px/1.3 Satoshi,Arial,sans-serif;color:#5C6A62;margin-top:2px">' +
            p.a + ' · ' + s.label.toLowerCase() + '</div>');
          return { m: m, p: p };
        });

        map.fitBounds(PLACES.map(function (p) { return p.ll; }), { padding: [46, 46] });
        setTimeout(function () { map.invalidateSize(); }, 200);
        window.addEventListener('resize', function () { map.invalidateSize(); });

        // the page drives this: pick an area, the pins in it appear and the rest fade out
        self.focusArea = function (key) {
          var area = AREAS[key];
          markers.forEach(function (entry, i) {
            var inArea = !area || entry.p.g === key;
            entry.m.setStyle({ opacity: inArea ? 1 : 0.14, fillOpacity: inArea ? 1 : 0.1 });
            var el = entry.m.getElement && entry.m.getElement();
            if (el && inArea) {
              el.style.transition = 'none';
              el.style.transform = 'scale(.4)';
              el.style.transformOrigin = 'center';
              setTimeout(function () {
                el.style.transition = 'transform .34s cubic-bezier(.2,.8,.2,1)';
                el.style.transform = 'scale(1)';
              }, 40 + (i % 5) * 60);
            }
          });
          if (area) map.flyTo(area.centre, area.zoom, { duration: 0.9 });
          else map.flyToBounds(PLACES.map(function (p) { return p.ll; }), { padding: [46, 46], duration: 0.9 });
        };
        self.dispatchEvent(new CustomEvent('grwp-map-ready'));
      }).catch(function () {
        host.innerHTML = '<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;' +
          'font:500 13px Satoshi,Arial,sans-serif;color:#5C6A62">Map couldn\u2019t load.</div>';
      });
    }
  }
  if (!customElements.get('grwp-map')) customElements.define('grwp-map', GrwpMap);
})();
