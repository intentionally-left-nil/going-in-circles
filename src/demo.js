import 'leaflet/dist/leaflet.css'
import leaflet from 'leaflet';
import circleToPolygon from './circle-to-polygon';
const map = leaflet.map('map').setView([47.505, -100.99], 15);
leaflet.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: '___MAPBOX_ACCESS_TOKEN__'
}).addTo(map);

const circle = circleToPolygon([-100.99, 47.505], 100, 200);

const lines = [
    {
        type: "Polygon",
        coordinates: circle.coordinates,
    }
]
leaflet.geoJSON(lines, {
    style: {
        "color": "#ff7800",
        "weight": 5,
        "opacity": 0.65
    }
}).addTo(map);

