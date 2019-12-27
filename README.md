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
const radius = 500; // radius in meters
const numCircles = 4; // number of circles you want to divide the bullseye into

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

## Local development

1. git clone git@github.com:AnilRedshift/going-in-circles.git
1. npm install
1. export MAPBOX_API_TOKEN=YOUR_MAPBOX_TOKEN
1. npm run dev

You'll need a [mapbox api token](https://account.mapbox.com/access-tokens/) to see the underlying map. You need to export this as a shell variable before running the webserver.


This opens up a webserver at localhost:5000, where you can play around with the code. See [demo.js](src/demo.js) for an example.

## Publishing a new version
1. bump the version in package.json
2. npm run prod
3. push to npm