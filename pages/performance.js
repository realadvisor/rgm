// @flow

/**
 * <!-- {"order": 8 } -->
 *
 * # Thousand markers
 *
 * Example of drawing 1000 React markers.
 *
 */

import * as React from 'react';
import { Map, Overlay, ReactMarker } from 'rgm';
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

const genRandomMarkers = n =>
  Array.from(Array(n), () => {
    const r = Math.random() * 2 + 0.05;
    const angle = Math.random() * 2 * Math.PI;

    return {
      lat: MAP_OPTIONS.center.lat + r * Math.cos(angle),
      lng: MAP_OPTIONS.center.lng + r * Math.sin(angle),
    };
  });

export default function Performance() {
  const api = useGoogleApiLoader();
  const INITIAL_MARKERS_COUNT = 1000;
  const [markers] = React.useState(() =>
    genRandomMarkers(INITIAL_MARKERS_COUNT),
  );

  return (
    <Ratio value={3 / 4}>
      {api && (
        <Map api={api} options={MAP_OPTIONS}>
          <Overlay>
            {markers.map((m, index) => (
              <ReactMarker key={index} lat={m.lat} lng={m.lng}>
                <Marker />
              </ReactMarker>
            ))}
          </Overlay>
        </Map>
      )}
    </Ratio>
  );
}

const Marker = () => (
  <div
    css={css`
      place-self: center center;
      width: 10px;
      height: 10px;
      border-radius: 100%;
      background-color: white;
      border: 2px solid red;
    `}
  />
);

export const getStaticProps = async () => {
  // The best is to place this method at _app.js but this doesn't work now
  const doc = await import('../dev-src/doc');
  return doc.getStaticProps();
};
