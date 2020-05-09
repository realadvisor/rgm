/**
 * <!-- {"order": 10} -->
 *
 * # Typescript
 *
 * TS usage example.
 *
 * Minimal example with all existing api usage _(without Overlay debug prop)_.
 */

import * as React from 'react';
// I haven't found why paths inside tsconfig.json doesn't work, NEED HELP!
import { Map, Overlay, Marker, useMap } from '../src';
import { css } from '@emotion/core';
import { useGoogleApiLoader } from '../dev-src/hooks';
import { Ratio } from '../dev-src/controls';

// https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions
const MAP_OPTIONS: google.maps.MapOptions = {
  zoom: 9,
  center: {
    lat: 59.936,
    lng: 30.314,
  },
  gestureHandling: 'greedy',
  clickableIcons: false,
};

const Child = () => {
  const { api, map } = useMap();

  React.useEffect(() => {
    console.log(map.getCenter().toJSON(), api.version);
  }, [map]);

  return null;
};

export default function TsRgm() {
  const api = useGoogleApiLoader();
  const [map, setMap] = React.useState<null | google.maps.Map<HTMLDivElement>>(
    null,
  );

  return (
    <div>
      <button
        css={css`
          margin: 16px;
        `}
        onClick={() => {
          if (map != null) {
            map.panBy(Math.random() * 300 - 150, Math.random() * 300 - 150);
          }
        }}
      >
        Click
      </button>
      <Ratio value={3 / 4}>
        {api && (
          <Map ref={setMap} api={api} options={MAP_OPTIONS}>
            <Overlay>
              <Marker lat={59.936} lng={30.314}>
                <CircleMarker />
              </Marker>
            </Overlay>
            <Child />
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
    TS
  </div>
);

export const getStaticProps = async () => {
  // The best is to place this method at _app.js but this doesn't work now
  // @ts-ignore
  const doc = await import('../dev-src/doc');
  return doc.getStaticProps();
};
