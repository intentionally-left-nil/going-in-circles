# Going in circles
This is a small package which produces lat/long coordinates in various circle patterns.
You can have a single circle, a cocentric circle (think a donut), or a bullseye containing several cocentric circles:

![Screenshot](screenshot.png)

This is especially useful for feeding into things like GeoJSON.

# Installation
```bash
npm install going-in-circles
```

# Usage

```js
const {bullseye} = require('going-in-circles');
const center = {lat: 47.505, long: -100.99};
const radius = 500;
const numCircles = 4;

const circles = bullseye({center, radius, numCircles});
// circles is in the format:
[
    {
        segments: [
            [long, lat],
            [long, lat],
            ...

        ]
    },
    {
        // circle 2
    },
    {
        // circle 3, etc.
    }
]

```

Using [leaflet](https://leafletjs.com/examples/geojson/) you can plot the bullseye with code like the following:

```js
for (const circle of circles) {
    const color = randomcolor();
    for (const segment of circle.segments) {
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
}
```
