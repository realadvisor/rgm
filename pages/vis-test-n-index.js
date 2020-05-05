// @flow

/**
 * <!-- {"order": 101 } -->
 *
 * # N markers (key as index)
 *
 * Most tests here are visual tests
 *
 * ### What to do
 *
 * You need to actively move/zoom map until markers exists.
 *
 * ### What to expect
 *
 * All markers are moving to predictable direction. No markers should stay at the end
 *
 */

import * as React from 'react';
import { Map, Overlay, ReactMarker } from 'rgm';
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
  Array.from(Array(n), () => ({
    lat: MAP_OPTIONS.center.lat + (Math.random() - 0.5) * 2 * 0.6,
    lng: MAP_OPTIONS.center.lng + (Math.random() - 0.5) * 2 * 0.6,
  }));

export default function TestIndex() {
  const api = useGoogleApiLoader();
  const INITIAL_MARKERS_COUNT = 200;
  const [markers, setMarkers] = React.useState(
    genRandomMarkers(INITIAL_MARKERS_COUNT),
  );

  React.useEffect(() => {
    const startTime = new Date();
    const MARKERS_TO_DELETE = 10;
    const INTERVAL_TIMEOUT = 100;

    let newCount = MARKERS_TO_DELETE;

    const handle = setInterval(() => {
      setMarkers(markers => {
        const dt = (new Date() - startTime) / 1000;
        if (dt > 30) {
          newCount = 9;
        }
        if (dt > 60) {
          newCount = 0;
        }

        const oldMarkers = [...markers];

        // Drop random interval
        oldMarkers.splice(
          Math.max(
            0,
            Math.floor(Math.random() * oldMarkers.length) - MARKERS_TO_DELETE,
          ),
          MARKERS_TO_DELETE,
        );

        const newMarkers = genRandomMarkers(newCount);
        const r = [...oldMarkers, ...newMarkers];
        return r;
      });
    }, INTERVAL_TIMEOUT);

    return () => {
      clearInterval(handle);
    };
  }, []);

  return (
    <Ratio value={3 / 4}>
      {api && (
        <Map api={api} options={MAP_OPTIONS}>
          <Overlay>
            {markers.map((m, index) => (
              <ReactMarker key={index} lat={m.lat} lng={m.lng}>
                <Marker
                  style={{
                    alignSelf: 'end',
                    justifySelf: 'center',
                    // easier to use placeSelf
                  }}
                  size={18}
                  color={'red'}
                />
              </ReactMarker>
            ))}
          </Overlay>
        </Map>
      )}
    </Ratio>
  );
}

const Marker = ({ size, color, style }) => (
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

export const getStaticProps = async () => {
  // The best is to place this method at _app.js but this doesn't work now
  const doc = await import('../dev-src/doc');
  return doc.getStaticProps();
};
