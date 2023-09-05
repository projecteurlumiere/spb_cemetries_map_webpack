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

// setTimeout(function () {
//   sidebar.show();
// }, 500);

// let myFilter = [
//   'grayscale:100%',
//   'invert:100%',
// ]

// let myTileLayer = L.tileLayer.colorFilter('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
//     attribution: '<a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia</a>',
//     filter: myFilter,
// }).addTo(map);