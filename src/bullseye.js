import circle from './circle';
import cocentricCircle from './cocentric-circle';
export default function bullseye({ center, radius, numCircles }) {
    const circleRadius = radius / numCircles;
    const firstCircleCoordinates = circle({ center, radius: circleRadius })
    const circles = [{ segments: [firstCircleCoordinates] }];

    for (let i = 1; i < numCircles; i++) {
        const innerRadius = circleRadius * i;
        const outerRadius = innerRadius + circleRadius;
        const numSegments = i * 4;
        const segments = cocentricCircle({ center, innerRadius, outerRadius, numSegments });
        circles.push({ segments });
    }
    return circles;
}