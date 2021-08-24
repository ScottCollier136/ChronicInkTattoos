import Point from './Point';

export default function(center, radius) {
  return {
    center,
    radius,
    getCircumference() {
      return 2 * radius * Math.PI;
    },
    getArea() {
      return radius ** 2 * Math.PI;
    },
    includes(Point) {

      const xValue = Math.pow((Point.x - center.x),2);
      const yValue = Math.pow((Point.y - center.y),2);

      if( xValue + yValue <= Math.pow(radius,2)){
        return true;
      }

      return false;
    }
  }
}