import {
  NUMBER_OF_COORDINATES_IN_CIRCLE,
  RADIANS_BETWEEN_COORDINATES,
} from './constants';
import getCoordinate from './get-coordinate';

export default function circle({ center, radius }) {
  const firstCoordinate = getCoordinate({ center, radius, radian: 0 });
  const coordinates = [];
  for (let i = 1; i < NUMBER_OF_COORDINATES_IN_CIRCLE; i++) {
    const radian = i * RADIANS_BETWEEN_COORDINATES;
    coordinates.push(getCoordinate({ center, radius, radian }));
  }

  // In order to follow the geoJSON spec, the first and last coordinate must match
  // and it must follow the 'right-hand-rule'
  // For the latter, we just reverse the coordinates to match the direction
  return [firstCoordinate, ...coordinates, firstCoordinate].reverse();
}
