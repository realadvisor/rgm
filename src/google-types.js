// @flow

import type { GeoJSON } from './geojson-types';

/* coordinates */
type LatLngLiteral = {
  +lat: number,
  +lng: number,
  ...
};

declare class LatLng {
  constructor(lat: number, lng: number, noWrap?: boolean): LatLng;
  equals(other: LatLng): boolean;
  lat(): number;
  lng(): number;
  toJSON(): LatLngLiteral;
  toString(): string;
  toUrlValue(precision?: number): string;
}

type LatLngBoundsLiteral = {
  east: number,
  north: number,
  south: number,
  west: number,
  ...
};

declare class LatLngBounds {
  constructor(
    sw: LatLng | LatLngLiteral,
    ne: LatLng | LatLngLiteral,
  ): LatLngBounds;
  constructor(): LatLngBounds;
  contains(latLng: LatLng | LatLngLiteral): boolean;
  equals(other: LatLngBounds | LatLngBoundsLiteral): boolean;
  extend(point: LatLng | LatLngLiteral): LatLngBounds;
  getCenter(): LatLng;
  getNorthEast(): LatLng;
  getSouthWest(): LatLng;
  intersects(other: LatLngBounds | LatLngBoundsLiteral): boolean;
  isEmpty(): boolean;
  toJSON(): LatLngBoundsLiteral;
  toSpan(): LatLng;
  toString(): string;
  toUrlValue(precision?: number): string;
  union(other: LatLngBounds | LatLngBoundsLiteral): LatLngBounds;
}

/* autocomplete service */

type ComponentRestrictions = {
  country?: string | $ReadOnlyArray<string>,
  ...
};

declare class AutocompleteSessionToken {
  constructor(): AutocompleteSessionToken;
}

type AutocompletionRequest = {
  bounds?: LatLngBounds | LatLngBoundsLiteral,
  componentRestrictions?: ComponentRestrictions,
  input: string,
  location?: LatLng,
  offset?: number,
  radius?: number,
  sessionToken?: AutocompleteSessionToken,
  types?: $ReadOnlyArray<string>,
  ...
};

type PredictionSubstring = {
  length: number,
  offset: number,
  ...
};

type StructuredFormatting = {
  main_text: string,
  main_text_matched_substrings: $ReadOnlyArray<PredictionSubstring>,
  secondary_text?: string,
  secondary_text_matched_substrings?: $ReadOnlyArray<PredictionSubstring>,
  ...
};

type PredictionTerm = {
  offset: number,
  value: string,
  ...
};

type AutocompletePrediction = {
  description: string,
  matched_substrings: $ReadOnlyArray<PredictionSubstring>,
  place_id: string,
  structured_formatting: StructuredFormatting,
  terms: $ReadOnlyArray<PredictionTerm>,
  types: $ReadOnlyArray<string>,
  ...
};

opaque type INVALID_REQUEST = 'INVALID_REQUEST';
opaque type NOT_FOUND = 'NOT_FOUND';
opaque type OK = 'OK';
opaque type OVER_QUERY_LIMIT = 'OVER_QUERY_LIMIT';
opaque type REQUEST_DENIED = 'REQUEST_DENIED';
opaque type UNKNOWN_ERROR = 'UNKNOWN_ERROR';
opaque type ZERO_RESULTS = 'ZERO_RESULTS';

type PlacesServiceStatus =
  | INVALID_REQUEST
  | NOT_FOUND
  | OK
  | OVER_QUERY_LIMIT
  | REQUEST_DENIED
  | UNKNOWN_ERROR
  | ZERO_RESULTS;

type QueryAutocompletionRequest = {
  bounds?: LatLngBounds | LatLngBoundsLiteral,
  input: string,
  location?: LatLng,
  offset?: number,
  radius?: number,
  ...
};

type QueryAutocompletePrediction = {
  description: string,
  matched_substrings: $ReadOnlyArray<PredictionSubstring>,
  place_id: string,
  terms: $ReadOnlyArray<PredictionTerm>,
  ...
};

declare class AutocompleteService {
  constructor(): AutocompleteService;
  getPlacePredictions(
    request: AutocompletionRequest,
    callback: (
      ?$ReadOnlyArray<AutocompletePrediction>,
      PlacesServiceStatus,
    ) => void,
  ): void;
  getQueryPredictions(
    request: QueryAutocompletionRequest,
    callback: (
      ?$ReadOnlyArray<QueryAutocompletePrediction>,
      PlacesServiceStatus,
    ) => void,
  ): void;
}

export type GoogleAutocompleteService = AutocompleteService;

/* geocoder */

type GeocoderComponentRestrictions = {
  administrativeArea?: string,
  country?: string,
  locality?: string,
  postalCode?: string,
  route?: string,
  ...
};

type GeocoderRequest = {
  address?: string,
  bounds?: LatLngBounds | LatLngBoundsLiteral,
  componentRestrictions?: GeocoderComponentRestrictions,
  location?: LatLng | LatLngLiteral,
  placeId?: string,
  region?: string,
  ...
};

type GeocoderAddressComponent = {
  long_name: string,
  short_name: string,
  types: $ReadOnlyArray<string>,
  ...
};

opaque type APPROXIMATE = 'APPROXIMATE';
opaque type GEOMETRIC_CENTER = 'GEOMETRIC_CENTER';
opaque type RANGE_INTERPOLATED = 'RANGE_INTERPOLATED';
opaque type ROOFTOP = 'ROOFTOP';

type GeocoderLocationType =
  | APPROXIMATE
  | GEOMETRIC_CENTER
  | RANGE_INTERPOLATED
  | ROOFTOP;

type GeocoderGeometry = {
  bounds?: LatLngBounds,
  location: LatLng,
  location_type: GeocoderLocationType,
  viewport: LatLngBounds,
  ...
};

type GeocoderResult = {
  address_components: $ReadOnlyArray<GeocoderAddressComponent>,
  formatted_address: string,
  geometry: GeocoderGeometry,
  partial_match: boolean,
  place_id: string,
  postcode_localities: $ReadOnlyArray<string>,
  types: $ReadOnlyArray<string>,
  ...
};

opaque type ERROR = 'ERROR';

type GeocoderStatus =
  | ERROR
  | INVALID_REQUEST
  | OK
  | OVER_QUERY_LIMIT
  | REQUEST_DENIED
  | UNKNOWN_ERROR
  | ZERO_RESULTS;

declare class Geocoder {
  constructor(): Geocoder;
  geocode(
    request: GeocoderRequest,
    callback: ($ReadOnlyArray<GeocoderResult>, GeocoderStatus) => void,
  ): void;
}

export type GoogleGeocoder = Geocoder;

/* map */

type FullscreenControlOptions = mixed;

type MapTypeControlOptions = mixed;

type MapTypeId = 'hybrid' | 'roadmap' | 'satellite' | 'terrain';

type PanControlOptions = mixed;

type MapRestriction = mixed;

opaque type BOTTOM_CENTER = mixed;
opaque type BOTTOM_LEFT = mixed;
opaque type BOTTOM_RIGHT = mixed;
opaque type LEFT_BOTTOM = mixed;
opaque type LEFT_CENTER = mixed;
opaque type LEFT_TOP = mixed;
opaque type RIGHT_BOTTOM = mixed;
opaque type RIGHT_CENTER = mixed;
opaque type RIGHT_TOP = mixed;
opaque type TOP_CENTER = mixed;
opaque type TOP_LEFT = mixed;
opaque type TOP_RIGHT = mixed;

type ControlPosition =
  | BOTTOM_CENTER
  | BOTTOM_LEFT
  | BOTTOM_RIGHT
  | LEFT_BOTTOM
  | LEFT_CENTER
  | LEFT_TOP
  | RIGHT_BOTTOM
  | RIGHT_CENTER
  | RIGHT_TOP
  | TOP_CENTER
  | TOP_LEFT
  | TOP_RIGHT;

type RotateControlOptions = {
  position: ControlPosition,
  ...
};

type ScaleControlOptions = mixed;

type StreetViewPanorama = mixed;

type StreetViewControlOptions = mixed;

type MapTypeStyle = mixed;

type ZoomControlOptions = mixed;

type Padding = mixed;

type Projection = mixed;

export type GoogleMapOptions = {|
  center: LatLng | LatLngLiteral,
  zoom: number,
  backgroundColor?: string,
  clickableIcons?: boolean,
  controlSize?: number,
  disableDefaultUI?: boolean,
  disableDoubleClickZoom?: boolean,
  draggable?: boolean,
  draggableCursor?: string,
  draggingCursor?: string,
  fullscreenControl?: boolean,
  fullscreenControlOptions?: FullscreenControlOptions,
  gestureHandling?: string,
  heading?: number,
  keyboardShortcuts?: boolean,
  mapTypeControl?: boolean,
  mapTypeControlOptions?: MapTypeControlOptions,
  mapTypeId?: MapTypeId,
  maxZoom?: number,
  minZoom?: number,
  noClear?: boolean,
  panControl?: boolean,
  panControlOptions?: PanControlOptions,
  restriction?: MapRestriction,
  rotateControl?: boolean,
  rotateControlOptions?: RotateControlOptions,
  scaleControl?: boolean,
  scaleControlOptions?: ScaleControlOptions,
  scrollwheel?: boolean,
  streetView?: StreetViewPanorama,
  streetViewControl?: boolean,
  streetViewControlOptions?: StreetViewControlOptions,
  styles?: $ReadOnlyArray<MapTypeStyle>,
  tilt?: number,
  zoomControl?: boolean,
  zoomControlOptions?: ZoomControlOptions,
|};

type Feature = {|
  getId: () => string | number | void,
  // $FlowFixMe
  getProperty: (name: string) => any,
  removeProperty: (name: string) => void,
  // $FlowFixMe
  setProperty: (name: string, value: any) => void,
|};

type StyleOptions = {|
  clickable?: boolean,
  cursor?: string,
  draggable?: boolean,
  editable?: boolean,
  fillColor?: string,
  fillOpacity?: number,
  icon?: string | Symbol,
  strokeColor?: string,
  strokeOpacity?: number,
  strokeWeight?: number,
  title?: string,
  visible?: boolean,
  zIndex?: number,
|};

type MapDataEventHandler = (event: {
  feature: Feature,
  latLng: LatLng,
  ...
}) => void;

type MapsEventListener = {|
  remove: () => void,
|};

type MapData = {|
  addGeoJson: (obj: GeoJSON) => $ReadOnlyArray<Feature>,
  setStyle: (style: StyleOptions) => void,
  revertStyle: (feature?: Feature) => void,
  overrideStyle: (feature: Feature, style: StyleOptions) => void,
  remove: (feature: Feature) => void,
  addListener: (
    eventName: 'mouseover' | 'mouseout' | 'addfeature',
    MapDataEventHandler,
  ) => MapsEventListener,
|};

type EventNames =
  | 'bounds_changed'
  | 'center_changed'
  | 'drag'
  | 'dragend'
  | 'dragstart'
  | 'heading_changed'
  | 'idle'
  | 'maptypeid_changed'
  | 'projection_changed'
  | 'tilesloaded'
  | 'tilt_changed'
  | 'zoom_changed';

type MouseEventNames =
  | 'click'
  | 'dblclick'
  | 'mousemove'
  | 'mouseout'
  | 'mouseover'
  | 'rightclick';

declare export class GoogleMap {
  constructor(Element, options: GoogleMapOptions): GoogleMap;

  addListener: ((eventName: EventNames, () => void) => MapsEventListener) &
    ((eventName: MouseEventNames, (MouseEvent) => void) => MapsEventListener);

  fitBounds(
    bounds: LatLngBounds | LatLngBoundsLiteral,
    padding?: number | Padding,
  ): void;
  getBounds(): LatLngBounds;
  getCenter(): LatLng;
  getClickableIcons(): boolean;
  getDiv(): Element;
  getHeading(): number;
  getMapTypeId(): MapTypeId | string;
  getProjection(): Projection;
  getStreetView(): StreetViewPanorama;
  getTilt(): number;
  getZoom(): number;
  panBy(x: number, y: number): void;
  panTo(latLng: LatLng | LatLngLiteral): void;
  panToBounds(
    latLngBounds: LatLngBounds | LatLngBoundsLiteral,
    padding?: number | Padding,
  ): void;
  setCenter(latlng: LatLng | LatLngLiteral): void;
  setClickableIcons(value: boolean): void;
  setHeading(heading: number): void;
  setMapTypeId(mapTypeId: MapTypeId | string): void;
  setOptions(options: $Shape<GoogleMapOptions>): void;
  setStreetView(panorama: StreetViewPanorama): void;
  setTilt(tilt: number): void;
  setZoom(zoom: number): void;
  data: MapData;
}

type Point = mixed;
type Animation = mixed;
type Icon = mixed;
type Symbol = mixed;
type MarkerLabel = mixed;
type MarkerShape = mixed;

type MarkerOptions = {
  position: LatLng | LatLngLiteral,
  anchorPoint?: Point,
  animation?: Animation,
  clickable?: boolean,
  crossOnDrag?: boolean,
  cursor?: string,
  draggable?: boolean,
  icon?: string | Icon | Symbol,
  label?: string | MarkerLabel,
  map?: GoogleMap | StreetViewPanorama,
  opacity?: number,
  optimized?: boolean,
  shape?: MarkerShape,
  title?: string,
  visible?: boolean,
  zIndex?: number,
  ...
};

declare class Marker {
  constructor(opts: MarkerOptions): void;
  getMap(): GoogleMap | StreetViewPanorama;
  setMap(map: GoogleMap | StreetViewPanorama): void;
}

declare class OverlayView {
  setMap: (null | GoogleMap) => void;
  onAdd: () => void;
  onRemove: () => void;
  draw: () => void;
  getPanes: () => {
    floatPane: HTMLElement,
    ...
  };
  getProjection: () => {
    fromLatLngToDivPixel: LatLng => { x: number, y: number, ... },
    ...
  };
}

export type GoogleMapsApi = {
  version: string,
  // coordinates
  LatLng: Class<LatLng>,
  LatLngBounds: Class<LatLngBounds>,
  Point: mixed,
  Size: mixed,
  OverlayView: Class<OverlayView>,
  /* map */
  Map: Class<GoogleMap>,
  Marker: Class<Marker>,
  ControlPosition: {
    BOTTOM_CENTER: BOTTOM_CENTER,
    BOTTOM_LEFT: BOTTOM_LEFT,
    BOTTOM_RIGHT: BOTTOM_RIGHT,
    LEFT_BOTTOM: LEFT_BOTTOM,
    LEFT_CENTER: LEFT_CENTER,
    LEFT_TOP: LEFT_TOP,
    RIGHT_BOTTOM: RIGHT_BOTTOM,
    RIGHT_CENTER: RIGHT_CENTER,
    RIGHT_TOP: RIGHT_TOP,
    TOP_CENTER: TOP_CENTER,
    TOP_LEFT: TOP_LEFT,
    TOP_RIGHT: TOP_RIGHT,
    ...
  },
  /* geocoder */
  Geocoder: Class<Geocoder>,
  GeocoderLocationType: {
    APPROXIMATE: APPROXIMATE,
    GEOMETRIC_CENTER: GEOMETRIC_CENTER,
    RANGE_INTERPOLATED: RANGE_INTERPOLATED,
    ROOFTOP: ROOFTOP,
    ...
  },
  GeocoderStatus: {
    ERROR: ERROR,
    INVALID_REQUEST: INVALID_REQUEST,
    OK: OK,
    OVER_QUERY_LIMIT: OVER_QUERY_LIMIT,
    REQUEST_DENIED: REQUEST_DENIED,
    UNKNOWN_ERROR: UNKNOWN_ERROR,
    ZERO_RESULTS: ZERO_RESULTS,
    ...
  },
  places: {
    // autocomplete service
    AutocompleteService: Class<AutocompleteService>,
    PlacesServiceStatus: {
      INVALID_REQUEST: INVALID_REQUEST,
      NOT_FOUND: NOT_FOUND,
      OK: OK,
      OVER_QUERY_LIMIT: OVER_QUERY_LIMIT,
      REQUEST_DENIED: REQUEST_DENIED,
      UNKNOWN_ERROR: UNKNOWN_ERROR,
      ZERO_RESULTS: ZERO_RESULTS,
      ...
    },
    ...
  },
  ...
};
