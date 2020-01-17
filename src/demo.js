import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet';
import bullseye from './bullseye';
import equalAreaBullseye from './equal-area-bullseye';
import randomcolor from 'randomcolor';
const map = leaflet.map('map').setView([47.505, -100.99], 15);
leaflet
  .tileLayer(
    'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      accessToken: '___MAPBOX_ACCESS_TOKEN__',
    }
  )
  .addTo(map);

const circles = equalAreaBullseye({
  center: { lat: 47.505, long: -100.99 },
  area: 25 * 25 * Math.PI,
  numCircles: 4,
});

bullseye({
  center: { lat: 47.505, long: -100.99 },
  radius: 500,
  numCircles: 4,
});

for (const circle of circles) {
  const color = randomcolor();
  for (const segment of circle.segments) {
    leaflet
      .geoJSON(
        {
          type: 'Polygon',
          coordinates: [segment],
        },
        {
          style: {
            color,
            weight: 5,
            opacity: 0.65,
          },
        }
      )
      .addTo(map);
  }
}
