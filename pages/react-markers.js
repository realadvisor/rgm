// @flow

/**
 * <!-- {"order": 6} -->
 *
 * # React markers
 *
 * Superfast, can easily move/zoom thousands of markers on the map.
 * Rerendering of markers is not occured during move/zoom operation
 * _(if you dont update state on bounds, etc change events, [see idle quote](/events))_
 *
 * To add custom React marker on map, you need 2 controls _Overlay_ and _Marker_ overlay is the same
 * as google map overlay, and allows to place _Markers_. It has just one prop _debug_, see below why.
 *
 * You can add any amount of _Overlays_ to the Map _(have no idea why but you can)_
 *
 * _Marker_ is a wrapper around your component
 * and allows to pass _lat_, _lng_ into _Overlay_ in a type safe way wihout touching props of your component.
 *
 * Each marker is rendered inside placeholder with _{ width:0; height:0; display: grid }_ style.
 * This allows to select origin point of marker using only its
 * own css _place-self_, _align-self_, _justify-self_ properties.
 * Also _{ position: absolute }_ on a holder allows everything if grid positioning is not enough.
 *
 * To simplify markers positioning you can use _debug_ propery of _Overlay_ element.
 * It will show exact origin point position.
 *
 * See below how to use _Overlay_ and _Marker_.
 *
 * Also play with _debug_ property to see how you can use
 * css _alignSelf_ , _justifySelf_, _placeSelf_ properties to align different kind of markers.
 * _(For markers with "fun" shape use _position:relative_ and css left, right properties)_
 *
 * > _debug_ property won't work in production builds.
 *
 */

import * as React from 'react';
import { Map, Overlay, Marker } from 'rgm';
import { Flex, Box } from 'react-system';
import { useGoogleApiLoader } from '../dev-src/hooks';
import { Ratio, Checkbox, Select } from '../dev-src/controls';

// https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions
const MAP_OPTIONS = {
  zoom: 9,
  center: {
    lat: 59.936,
    lng: 30.314,
  },
  // disable cmd-zoom and 2 fingers zoom I personally dislike it
  gestureHandling: 'greedy',
  clickableIcons: false,
};

export default function MarkerPage() {
  const api = useGoogleApiLoader();

  const [debug, setDebug] = React.useState(true);
  const [alignSelf, setAlignSelf] = React.useState('end');
  const [justifySelf, setJustifySelf] = React.useState('center');

  return (
    <div>
      <Flex p={3} alignItems="baseline">
        <Checkbox id="debug" value={debug} onChange={setDebug}>
          Debug
        </Checkbox>
        <Box width={'8px'} />
        <Select
          value={alignSelf}
          onChange={setAlignSelf}
          options={['start', 'center', 'end']}
        />
        <Box width={'8px'} />
        <Select
          value={justifySelf}
          onChange={setJustifySelf}
          options={['start', 'center', 'end']}
        />
      </Flex>

      <Ratio value={3 / 4}>
        {api && (
          <Map api={api} options={MAP_OPTIONS}>
            <Overlay debug={debug}>
              <Marker lat={MAP_OPTIONS.center.lat} lng={MAP_OPTIONS.center.lng}>
                <MarkerBottom
                  style={{
                    alignSelf,
                    justifySelf,
                    // easier to use placeSelf
                  }}
                  size={48}
                  color={'red'}
                />
              </Marker>
              <Marker
                lat={MAP_OPTIONS.center.lat + 0.1}
                lng={MAP_OPTIONS.center.lng + 0.3}
              >
                <MarkerCentered
                  style={{
                    alignSelf,
                    justifySelf,
                  }}
                  size={48}
                  color={'Fuchsia'}
                />
              </Marker>
              <Marker
                lat={MAP_OPTIONS.center.lat - 0.1}
                lng={MAP_OPTIONS.center.lng - 0.3}
              >
                <MarkerCorner
                  style={{
                    alignSelf,
                    justifySelf,
                  }}
                  size={48}
                  color={'OrangeRed'}
                />
              </Marker>
            </Overlay>
          </Map>
        )}
      </Ratio>
    </div>
  );
}

const MarkerBottom = ({ size, color, style }) => (
  <svg
    style={style}
    xmlns="http://www.w3.org/2000/svg"
    height={size}
    width={size}
    viewBox="2 2 20 20"
    fill={color}
  >
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);

const MarkerCentered = ({ size, color, style }) => (
  <svg
    style={style}
    xmlns="http://www.w3.org/2000/svg"
    height={size}
    viewBox="0 0 24 24"
    width={size}
    fill={color}
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" />
  </svg>
);

const MarkerCorner = ({ size, color, style }) => (
  <svg
    style={style}
    xmlns="http://www.w3.org/2000/svg"
    height={size}
    viewBox="3 3 18 18"
    width={size}
    fill={color}
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z" />
  </svg>
);

export const getStaticProps = async () => {
  // The best is to place this method at _app.js but this doesn't work now
  const doc = await import('../dev-src/doc');
  return doc.getStaticProps();
};
