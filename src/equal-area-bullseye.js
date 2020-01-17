import circle from './circle';
import cocentricCircle from './cocentric-circle';

const getNextRadius = ({ firstRadius, prevRadius, numSegments }) => {
  const firstR2 = firstRadius * firstRadius;
  const prevR2 = prevRadius * prevRadius;
  return Math.sqrt(numSegments * firstR2 + prevR2);
};

export default function equalAreaBullseye({ center, area, numCircles }) {
  const firstRadius = Math.sqrt(area / Math.PI);
  const firstCircleCoordinates = circle({ center, radius: firstRadius });
  const circles = [{ segments: [firstCircleCoordinates] }];

  let prevRadius = firstRadius;
  let radius;
  for (let i = 1; i < numCircles; i++, prevRadius = radius) {
    const numSegments = 4 * i;
    radius = getNextRadius({ firstRadius, prevRadius, numSegments });
    const segments = cocentricCircle({
      center,
      innerRadius: prevRadius,
      outerRadius: radius,
      numSegments,
    });
    circles.push({ segments });
  }
  return circles;
}
