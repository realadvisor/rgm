// @flow

/**
 * <!-- {"order": 5} -->
 *
 * # Google map methods
 *
 * As like as using _useMap_ at _Map_ children Components you can
 * use ref to map instance and apply any operation on
 * [google map instance](https://developers.google.com/maps/documentation/javascript/reference/map) imperatively.
 *
 * Using _ref_ and _useEffect_ you can make any property controllable if needed.
 */

import * as React from 'react';
import { Map } from 'rgm';
import { Flex, Box } from 'react-system';
import { useGoogleApiLoader } from '../dev-src/hooks';
import { Ratio } from '../dev-src/controls';

// https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions
const MAP_OPTIONS = {
  zoom: 9,
  center: {
    lat: 59.936,
    lng: 30.314,
  },
};

export default function Imperative() {
  const api = useGoogleApiLoader();
  const mapRef = React.useRef(null);

  return (
    <div>
      <Flex p={3}>
        <button
          onClick={() => {
            mapRef.current?.panBy(
              200 * (Math.random() - 0.5),
              200 * (Math.random() - 0.5),
            );
          }}
        >
          Move
        </button>
        <Box width={'16px'} />
        <button
          onClick={() => {
            mapRef.current?.setOptions({
              disableDefaultUI: true,
            });
          }}
        >
          Disable ui
        </button>
        <Box width={'16px'} />
        <button
          onClick={() => {
            mapRef.current?.setOptions({
              disableDefaultUI: false,
            });
          }}
        >
          Enable ui
        </button>
      </Flex>
      <Ratio value={3 / 4}>
        {api && <Map ref={mapRef} api={api} options={MAP_OPTIONS}></Map>}
      </Ratio>
    </div>
  );
}

export const getStaticProps = async () => {
  // The best is to place this method at _app.js but this doesn't work now
  const doc = await import('../dev-src/doc');
  return doc.getStaticProps();
};
