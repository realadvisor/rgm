// @flow

import * as React from 'react';
import type {
  GoogleMap,
  GoogleMapOptions,
  GoogleMapsApi,
} from './google-types.js';

type MapProps = {|
  // https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions
  options: GoogleMapOptions | (HTMLDivElement => GoogleMapOptions),
  // window.google.maps
  api: GoogleMapsApi,
  children?: React.Node,
|};

type MapContextType = {|
  api: GoogleMapsApi,
  map: GoogleMap,
|};

// $FlowFixMe
const MapContext = React.createContext<MapContextType>((null: any));

export type GoogleMapRef = React.ElementRef<
  React.AbstractComponent<MapProps, GoogleMap>,
>;

const warnOnce = (() => {
  const map = {};

  return (str: string) => {
    if (map[str] == null) {
      map[str] = true;
      console.warn(str);
    }
  };
})();

const STYLE = { width: '100%', height: '100%' };

export const Map = React.forwardRef<MapProps, GoogleMap>((props, ref) => {
  const element = React.useRef(null);
  const guardRef = React.useRef(false);
  const [map, setMap] = React.useState<GoogleMap | null>(null);

  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const apiRef = React.useRef(props.api);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const optionsRef = React.useRef(props.options);

    if (apiRef.current !== props.api) {
      warnOnce(`
        api prop has changed.
        If it's desired behaviour please remount your component
        using key={hash(api)} on your component.
      `);
    }

    if (
      typeof props.options !== 'function' &&
      optionsRef.current !== props.options
    ) {
      warnOnce(`
        options prop has changed.
        If it's desired behaviour please use imperative api, i.e.

        mapRef.current.apply(map =>  map.setOptions({...}));
      `);
    }
  }

  React.useImperativeHandle(ref, () => map, [map]);

  React.useEffect(
    () => {
      if (element.current && !guardRef.current) {
        const lmap = new props.api.Map(
          element.current,
          typeof props.options === 'function'
            ? props.options(element.current)
            : props.options,
        );

        guardRef.current = true;
        setMap(lmap);

        return () => {};
      }
    },
    // eslint is wrong here
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [props.api, props.options],
  );

  const ctxValue = React.useMemo(() => (map ? { map, api: props.api } : null), [
    map,
    props.api,
  ]);

  return (
    <>
      <div style={STYLE} ref={element} />
      {ctxValue && (
        <MapContext.Provider value={ctxValue}>
          {props.children}
        </MapContext.Provider>
      )}
    </>
  );
});

export const useMap = () => React.useContext(MapContext);
