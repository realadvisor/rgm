// @flow

/**
 * <!-- {"order": 2} -->
 *
 * # Native google marker
 *
 * Get instances of [google.maps.Map](https://developers.google.com/maps/documentation/javascript/reference/map)
 * class and instance of _google.maps_ using _useMap_ hook.
 *
 * Then as like as in [example here](https://developers.google.com/maps/documentation/javascript/adding-a-google-map)
 * just add marker using _React.useEffect_ hook
 *
 * You can ask why not to expose it with the library.
 * See the [api surface of Google marker](https://developers.google.com/maps/documentation/javascript/reference/marker#Marker)
 * The final component may be huge and not solve all the cases.
 */

import * as React from 'react';
import { Map, useMap } from 'rgm';
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

type MarkerProps = {|
  lat: number,
  lng: number,
|};

export const GoogleMarker = ({ lat, lng }: MarkerProps) => {
  const { api, map } = useMap();

  React.useEffect(() => {
    if (api) {
      const marker = new api.Marker({
        map,
        position: {
          lat,
          lng,
        },
      });

      return () => {
        marker.setMap(null);
      };
    }
  }, [api, map, lat, lng]);

  return null;
};

export default function GoogleMarkerPage() {
  const api = useGoogleApiLoader();

  return (
    <Ratio value={3 / 4}>
      {api && (
        <Map api={api} options={MAP_OPTIONS}>
          <GoogleMarker
            lat={MAP_OPTIONS.center.lat}
            lng={MAP_OPTIONS.center.lng}
          />
        </Map>
      )}
    </Ratio>
  );
}

export const getStaticProps = async () => {
  // The best is to place this method at _app.js but this doesn't work now
  const doc = await import('../dev-src/doc');
  return doc.getStaticProps();
};
