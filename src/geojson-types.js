// @flow

type GeoJSONPosition = [number, number] | [number, number, number];

type Geometry<T, C> = {| +type: T, +coordinates: C |};

type GeoJSONPoint = Geometry<'Point', GeoJSONPosition>;

type GeoJSONMultiPoint = Geometry<
  'MultiPoint',
  $ReadOnlyArray<GeoJSONPosition>,
>;

type GeoJSONLineString = Geometry<
  'LineString',
  $ReadOnlyArray<GeoJSONPosition>,
>;
type GeoJSONMultiLineString = Geometry<
  'MultiLineString',
  $ReadOnlyArray<$ReadOnlyArray<GeoJSONPosition>>,
>;

type GeoJSONPolygon = Geometry<
  'Polygon',
  $ReadOnlyArray<$ReadOnlyArray<GeoJSONPosition>>,
>;
type GeoJSONMultiPolygon = Geometry<
  'MultiPolygon',
  $ReadOnlyArray<$ReadOnlyArray<$ReadOnlyArray<GeoJSONPosition>>>,
>;

type GeoJSONGeometry =
  | GeoJSONPoint
  | GeoJSONMultiPoint
  | GeoJSONLineString
  | GeoJSONMultiLineString
  | GeoJSONPolygon
  | GeoJSONMultiPolygon
  | GeoJSONGeometryCollection;

type GeoJSONGeometryCollection = {|
  type: 'GeometryCollection',
  geometries: $ReadOnlyArray<GeoJSONGeometry>,
|};

type GeoJSONFeature = {|
  type: 'Feature',
  geometry: ?GeoJSONGeometry,
  properties?: null | { ... },
  id?: number | string,
|};

type GeoJSONFeatureCollection = {|
  type: 'FeatureCollection',
  features: $ReadOnlyArray<GeoJSONFeature>,
|};

export type GeoJSON =
  | GeoJSONGeometry
  | GeoJSONFeature
  | GeoJSONFeatureCollection;
