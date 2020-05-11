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
      console.warn(str.replace(/^\s+/gm, ''));
    }
  };
})();

const STYLE = { width: '100%', height: '100%' };

export const Map = React.forwardRef<MapProps, GoogleMap>(
  ({ api, options, children }, ref) => {
    const element = React.useRef(null);
    const firstTimeRef = React.useRef(true);
    const [ctx, setCtx] = React.useState<MapContextType | null>(null);

    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const apiRef = React.useRef(api);
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const optionsRef = React.useRef(options);

      if (apiRef.current !== api) {
        warnOnce(`
          "api" prop of <Map> element has changed.

          If it's desired behaviour please remount your component
          using key={hash(api)} on your component.
        `);
        // Reinit map in case user has changed loader in dev
        firstTimeRef.current = true;
      }

      // JSON.stringify to work with React Refresh well
      if (
        typeof options !== 'function' &&
        JSON.stringify(optionsRef.current) !== JSON.stringify(options)
      ) {
        warnOnce(`
          "options" prop of <Map> element has changed.
          This change doesn't somehow affect map options at production.

          If it's desired behaviour please use imperative api, i.e. map.setOptions({...blabla});
        `);
        // Reinit map in case user changed options to find proper option
        firstTimeRef.current = true;
      }
    }

    React.useImperativeHandle(ref, () => (ctx ? ctx.map : null), [ctx]);

    React.useEffect(() => {
      if (firstTimeRef.current && element.current) {
        const map = new api.Map(
          element.current,
          // We clone options object because Google adding new fields into it
          // this is not an expected behaviour in modern world ;-)
          {
            ...(typeof options === 'function'
              ? options(element.current)
              : options),
          },
        );

        firstTimeRef.current = false;

        setCtx({ map, api });

        return () => {};
      }
    }, [api, options]);

    return (
      <>
        <div style={STYLE} ref={element} />
        {ctx && (
          <MapContext.Provider value={ctx}>{children}</MapContext.Provider>
        )}
      </>
    );
  },
);

export const useMap = () => React.useContext(MapContext);
