"use strict";

function toRadians(angleInDegrees) {
    return (angleInDegrees * Math.PI) / 180;
}

function toDegrees(angleInRadians) {
    return (angleInRadians * 180) / Math.PI;
}

export default function getCoordinate({ center, radius, radian }) {
    var lat1 = toRadians(center.lat);
    var lon1 = toRadians(center.long);
    var dByR = radius / 6378137; // distance divided by 6378137 (radius of the earth) wgs84
    var lat = Math.asin(
        Math.sin(lat1) * Math.cos(dByR) +
        Math.cos(lat1) * Math.sin(dByR) * Math.cos(radian)
    );
    var lon =
        lon1 +
        Math.atan2(
            Math.sin(radian) * Math.sin(dByR) * Math.cos(lat1),
            Math.cos(dByR) - Math.sin(lat1) * Math.sin(lat)
        );
    return [toDegrees(lon), toDegrees(lat)];
}