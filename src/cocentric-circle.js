import getCoordinate from './get-coordinate';
import cocentricSegment from './cocentric-segment';

const NUMBER_OF_COORDINATES_IN_CIRCLE = 180;
const RADIANS_BETWEEN_COORDINATES = (2 * Math.PI) / NUMBER_OF_COORDINATES_IN_CIRCLE;

export default function cocentricCircle({ center, innerRadius, outerRadius, numSegments }) {
    let segments = [];
    const radiansBetweenSegments = (2 * Math.PI) / numSegments;
    for (let i = 0; i < numSegments; i++) {
        const startRadian = i * radiansBetweenSegments;
        const endRadian = startRadian + radiansBetweenSegments;
        segments.push(cocentricSegment({ center, innerRadius, outerRadius, startRadian, endRadian }))
    }
    return segments;
}