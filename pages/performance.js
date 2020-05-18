// @flow

/**
 * <!-- {"order": 8 } -->
 *
 * # N markers
 *
 * Example of drawing N React markers.
 *
 */

import * as React from 'react';
import { Map, Overlay, Marker } from 'rgm';
import { css } from '@emotion/core';
import { Flex, Box } from 'react-system';
import { useGoogleApiLoader } from '../dev-src/hooks';
import { Ratio, Select } from '../dev-src/controls';
import type { StaticProps } from '../dev-src/doc.js';

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

export default function Performance(): React.Node {
  const api = useGoogleApiLoader();
  const INITIAL_MARKERS_COUNT = 200;
  const [markers, setMarkers] = React.useState(() =>
    genRandomMarkers(INITIAL_MARKERS_COUNT),
  );

  return (
    <div>
      <Flex p={3}>
        <Box pr={2}>Count:</Box>
        <Select
          options={['100', '200', '300', '500', '1000', '2000']}
          value={`${markers.length}`}
          onChange={v => {
            setMarkers(genRandomMarkers(Number.parseFloat(v)));
          }}
        />
      </Flex>
      <Ratio value={3 / 4}>
        {api && (
          <Map api={api} options={MAP_OPTIONS}>
            <Overlay>
              {markers.map((m, index) => (
                <Marker key={index} lat={m.lat} lng={m.lng}>
                  <CircleMarker />
                </Marker>
              ))}
            </Overlay>
          </Map>
        )}
      </Ratio>
    </div>
  );
}

const CircleMarker = () => (
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

export const getStaticProps = async (): Promise<StaticProps> => {
  // The best is to place this method at _app.js but this doesn't work now
  const doc = await import('../dev-src/doc');
  return doc.getStaticProps();
};
