import getCoordinate from './get-coordinate';
import { NUMBER_OF_COORDINATES_IN_CIRCLE, RADIANS_BETWEEN_COORDINATES } from './constants'

export default function cocentricSegment({ center, innerRadius, outerRadius, startRadian, endRadian }) {
    let coordinates = [];

    // draw the inner circle
    for (let radian = startRadian; radian < endRadian; radian += RADIANS_BETWEEN_COORDINATES) {
        coordinates.push(getCoordinate({ center, radius: innerRadius, radian }));
    }
    coordinates.push(getCoordinate({ center, radius: innerRadius, radian: endRadian }));

    // the outer circle, starting from the outer angle to the inner angle
    // that way we get the lines between the circles for free
    for (let radian = endRadian; radian > startRadian; radian -= RADIANS_BETWEEN_COORDINATES) {
        coordinates.push(getCoordinate({ center, radius: outerRadius, radian }))
    }
    coordinates.push(getCoordinate({ center, radius: outerRadius, radian: startRadian }));
    coordinates.push(getCoordinate({ center, radius: innerRadius, radian: startRadian }));
    return coordinates;
}