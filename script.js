let map = L.map('map').setView([59.8965, 30.3264], 10);

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);

let sidebar = L.control.sidebar('sidebar', {
  position: 'left'
});

map.addControl(sidebar);

let Stadia_AlidadeSmoothDark = L.tileLayer(`https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.{ext}?api_key=${api_key}`, {
	minZoom: 0,
  api_key: "c752503d-6fdc-485c-9b2f-b447b55fc800",
	maxZoom: 20,
	attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	ext: 'png'
}).addTo(map);


let polygon = L.polygon([
  [59.896563, 30.310181],
  [59.891538, 30.310439],
  [59.890580, 30.306039],
  [59.891473, 30.305567],
  [59.891075, 30.301725],
  [59.892431, 30.301210],
  [59.892689, 30.303485],
  [59.893260, 30.303271],
  [59.893077, 30.300996],
  [59.893787, 30.300738],
  [59.893906, 30.302026],
  [59.894132, 30.301983],
  [59.894164, 30.302562],
  [59.894648, 30.302476],
  [59.894627, 30.300416],
  [59.894627, 30.300416],
  [59.894498, 30.297712],
  [59.896155, 30.297090],
  [59.896219, 30.297347],
  [59.896499, 30.297347],
  [59.896478, 30.296875],
  [59.898490, 30.297218],
  [59.898738, 30.298914],
  [59.898576, 30.298978],
  [59.898835, 30.301554],
  [59.896532, 30.303163]
]).addTo(map);

polygon.on('click', 
  () => {
    sidebar.setContent('This is an old cemetry'); 
    setTimeout(function () {
    sidebar.show();
    }, 500);
  });

setTimeout(function () {
  sidebar.show();
}, 500);

// let myFilter = [
//   'grayscale:100%',
//   'invert:100%',
// ]

// let myTileLayer = L.tileLayer.colorFilter('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
//     attribution: '<a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia</a>',
//     filter: myFilter,
// }).addTo(map);