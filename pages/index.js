// @flow

/**
 * <!-- {"order": 1} -->
 *
 * # RGM - React Google Map
 *
 * Tiny but very powerful React Google Map.
 * It allows you to render any React component on the Google Map,
 * and provides easy access to native google map api.
 *
 * Minimal example with all existing api usage _(without Overlay debug prop)_.
 */

import * as React from 'react';
import { Map, Overlay, Marker, useMap } from 'rgm';
import { css } from '@emotion/core';
import { useGoogleApiLoader } from '../dev-src/hooks';
import { Ratio } from '../dev-src/controls';

// https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions
const MAP_OPTIONS = {
  zoom: 9,
  center: {
    lat: 59.936,
    lng: 30.314,
  },
  gestureHandling: 'greedy',
  clickableIcons: false,
};

export default function Rgm() {
  const api = useGoogleApiLoader();

  return (
    <Ratio value={3 / 4}>
      {api && (
        <Map api={api} options={MAP_OPTIONS}>
          <Overlay>
            <Marker lat={MAP_OPTIONS.center.lat} lng={MAP_OPTIONS.center.lng}>
              <CircleMarker />
            </Marker>
          </Overlay>
          <Child />
        </Map>
      )}
    </Ratio>
  );
}

const Child = () => {
  const { api, map } = useMap();

  React.useEffect(() => {
    console.info(map.getCenter().toJSON(), api.version);
  }, [map, api]);

  return null;
};

const CircleMarker = () => (
  <div
    css={css`
      place-self: center center;
      width: 50px;
      height: 50px;
      border-radius: 100%;
      background-color: white;
      border: 3px solid red;
      display: flex;
      align-items: center;
      justify-content: center;
    `}
  >
    RGM
  </div>
);

export const getStaticProps = async () => {
  // The best is to place this method at _app.js but this doesn't work now
  const doc = await import('../dev-src/doc');
  return doc.getStaticProps();
};
