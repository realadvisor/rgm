// @flow

/**
 * <!-- {"order": 7} -->
 *
 * # Clusters example
 *
 * Real life example. _(clusters, zoom on marker click)_
 *
 */

import * as React from 'react';
import { Map, Overlay, Marker } from 'rgm';
import { css } from '@emotion/core';
// $FlowFixMe
import Supercluster from 'supercluster';
import { useGoogleApiLoader } from '../dev-src/hooks';
import { Ratio } from '../dev-src/controls';
import { getScreenOffset } from '../dev-src/geo-utils';
// $FlowFixMe
import places from '../data/places.json';

const superclusterIndex = new Supercluster({
  log: false,
  radius: 60,
  extent: 256,
  maxZoom: 17,
}).load(places.features);

// https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions
const MAP_OPTIONS = {
  zoom: 1,
  maxZoom: 17,
  center: {
    lat: 0,
    lng: 30.304,
  },
  // disable cmd-zoom and 2 fingers zoom I personally dislike it
  gestureHandling: 'greedy',
  clickableIcons: false,
};

type Cluster = {|
  geometry: {|
    coordinates: [number, number],
  |},
  id?: number,
  properties: {|
    cluster?: boolean,
    cluster_id?: number,
    point_count?: number,
  |},
|};

// Google has no "zoom at point" method
const zoomAt = (map, pt, zoom) => {
  const center = map.getCenter();
  const centerLatLng = {
    lat: center.lat(),
    lng: center.lng(),
  };
  const offsetA = getScreenOffset(pt, centerLatLng, map.getZoom());
  const offsetB = getScreenOffset(pt, centerLatLng, zoom);
  const x = offsetA.x - offsetB.x;
  const y = offsetA.y - offsetB.y;
  map.setZoom(zoom);
  map.panBy(x, y);
};

export default function Clusters() {
  const api = useGoogleApiLoader();
  const [map, setMap] = React.useState(null);
  const [clusters, setClusters] = React.useState<$ReadOnlyArray<Cluster>>([]);

  React.useEffect(() => {
    if (map != null) {
      const boundsChangedListener = map.addListener('idle', () => {
        const bounds = map.getBounds();
        const zoom = map.getZoom();
        const sw = bounds.getSouthWest();
        const ne = bounds.getNorthEast();

        const swA = [sw.lng(), sw.lat()];
        const neA = [ne.lng(), ne.lat()];
        // Supercluster don't work in some cases, fix it
        if (swA[0] > neA[0] && swA[0] - neA[0] < 0.00001) {
          swA[0] = -180;
          neA[0] = 180;
        }

        const clusters = superclusterIndex.getClusters([...swA, ...neA], zoom);

        setClusters(clusters);
      });

      return () => {
        boundsChangedListener.remove();
      };
    }
  }, [map]);

  return (
    <Ratio value={3 / 4}>
      {api && (
        <Map ref={setMap} api={api} options={MAP_OPTIONS}>
          <Overlay debug={false}>
            {clusters.map(cluster => {
              const [lng, lat] = cluster.geometry.coordinates;
              return (
                <Marker key={`${lng} - ${lat}`} lng={lng} lat={lat}>
                  <ClusterMarker
                    count={cluster.properties.point_count ?? null}
                    onClick={() => {
                      if (map && cluster.id != null) {
                        zoomAt(
                          map,
                          {
                            lng,
                            lat,
                          },
                          superclusterIndex.getClusterExpansionZoom(cluster.id),
                        );
                      }
                    }}
                  />
                </Marker>
              );
            })}
          </Overlay>
        </Map>
      )}
    </Ratio>
  );
}

// css is awesome!
const ClusterMarker = ({ count, onClick }) => {
  const text = count ?? '';

  return (
    <div
      onClick={onClick}
      css={css`
        position: relative;
        place-self: center center;
        border-radius: 100%;
        border: 3px solid #eee;
        background-color: white;
        padding: ${count == null ? 2 : 8}px;
        box-shadow: 0 0 0 2px #fe4a0d, 0 0 0 4px white;
        &:after {
          padding-top: 100%;
          content: ' ';
          display: block;
        }
        font-size: 1rem;

        &:hover {
          padding: ${count == null ? 3 : 10}px;
          transition: padding 0.07s ease-out;
          z-index: 1;
        }
        transition: padding 0.07s ease-in;
        cursor: pointer;
      `}
    >
      <div
        css={css`
          height: 0;
          overflow: hidden;
        `}
      >
        {text}
      </div>
      <div
        css={css`
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >
        {text}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  // The best is to place this method at _app.js but this doesn't work now
  const doc = await import('../dev-src/doc');
  return doc.getStaticProps();
};
