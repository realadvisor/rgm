// @flow

/**
 * <!-- {"order": 4} -->
 *
 * # Events
 *
 * Get instance of [google.maps.Map](https://developers.google.com/maps/documentation/javascript/reference/map)
 * class using _ref_ property or _useMap_ hook.
 * Then subscribe on any [event](https://developers.google.com/maps/documentation/javascript/events)
 * inside _useEffect_ hook using _addListener_.
 *
 * Don't forget to unsubscribe in _useEffect_ cleanup.
 *
 * > Sometimes google map fires events like _idle_ in a wrong order,
 *   usually wrapping callback into 2 rafs helps.
 *
 * > Don't use code below in production, it's better to intercept bounds changes inside _idle_ event.
 *
 */

import * as React from 'react';
import { Map } from 'rgm';
import { useGoogleApiLoader } from '../dev-src/hooks';
import { Ratio, Info } from '../dev-src/controls';
import type { StaticProps } from '../dev-src/doc.js';

// https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions
const MAP_OPTIONS = {
  zoom: 9,
  center: {
    lat: 59.936,
    lng: 30.314,
  },
};

export default function Events(): React.Node {
  const api = useGoogleApiLoader();
  const [bounds, setBounds] = React.useState(null);
  const [map, setMap] = React.useState(null);

  React.useEffect(() => {
    if (map != null) {
      const boundsChangedListener = map.addListener('bounds_changed', () => {
        const bounds = map.getBounds();
        setBounds(bounds);
      });

      return () => {
        boundsChangedListener.remove();
      };
    }
  }, [map]);

  return (
    <div>
      <Info>{bounds?.getCenter().toString() ?? ' '}</Info>
      <Ratio value={3 / 4}>
        {api && <Map ref={setMap} api={api} options={MAP_OPTIONS} />}
      </Ratio>
    </div>
  );
}

export const getStaticProps = async (): Promise<StaticProps> => {
  // The best is to place this method at _app.js but this doesn't work now
  const doc = await import('../dev-src/doc');
  return doc.getStaticProps();
};
