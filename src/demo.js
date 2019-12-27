import 'leaflet/dist/leaflet.css'
import leaflet from 'leaflet';
import cocentricCircle from './cocentric-circle';
import randomcolor from 'randomcolor';
const map = leaflet.map('map').setView([47.505, -100.99], 15);
leaflet.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: '___MAPBOX_ACCESS_TOKEN__'
}).addTo(map);

const segments = cocentricCircle({
    center: { lat: 47.505, long: -100.99 },
    innerRadius: 100,
    outerRadius: 200,
    numSegments: 4
});

for (const segment of segments) {
    const color = randomcolor();
    leaflet.geoJSON({
        type: "Polygon",
        coordinates: [segment],
    }, {
        style: {
            color,
            weight: 5,
            opacity: 0.65,
        }
    }).addTo(map);
}
