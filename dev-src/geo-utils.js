// @flow

type LatLngLiteral = {|
  lat: number,
  lng: number,
|};

const GOOGLE_TILE_SIZE = 256;

type Point = {| +x: number, +y: number |};

export function latLng2World({ lat, lng }: LatLngLiteral): Point {
  const sin = Math.sin((lat * Math.PI) / 180);
  const x = lng / 360 + 0.5;
  let y = 0.5 - (0.25 * Math.log((1 + sin) / (1 - sin))) / Math.PI;

  y = y < 0 ? 0 : y > 1 ? 1 : y;
  return { x, y };
}

const mod = (a, m) => ((a % m) + m) % m;

export function world2LatLng({ x, y }: Point): LatLngLiteral {
  const n = Math.PI - 2 * Math.PI * y;

  return {
    lat: (180 / Math.PI) * Math.atan(0.5 * (Math.exp(n) - Math.exp(-n))),
    lng: mod(x * 360, 360) - 180,
  };
}

export function getScreenOffset(
  a: LatLngLiteral,
  b: LatLngLiteral,
  zoom: number,
): Point {
  const wA = latLng2World(a);
  const wB = latLng2World(b);
  const scale = Math.pow(2, zoom);
  return {
    x: (wB.x - wA.x) * scale * GOOGLE_TILE_SIZE,
    y: (wB.y - wA.y) * scale * GOOGLE_TILE_SIZE,
  };
}
