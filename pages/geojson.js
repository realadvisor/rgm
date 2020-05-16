// @flow

/**
 * <!-- {"order": 3} -->
 *
 * # Show geojson
 *
 * Get instances of [google.maps.Map](https://developers.google.com/maps/documentation/javascript/reference/map)
 * class and instance of _google.maps_ using _useMap_ hook.
 *
 * Then using [google api datalayer](https://developers.google.com/maps/documentation/javascript/datalayer) and
 * [api reference](https://developers.google.com/maps/documentation/javascript/reference/data)
 * just add geojson using _React.useEffect_ hook
 *
 */

import * as React from 'react';
import { Map, useMap } from 'rgm';
import { useGoogleApiLoader } from '../dev-src/hooks';
import { Ratio } from '../dev-src/controls';
import type { StaticProps } from '../dev-src/doc.js';

// https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions
const MAP_OPTIONS = {
  zoom: 13,
  center: {
    lat: 46.22212,
    lng: 6.14156,
  },
  // disable cmd-zoom and 2 fingers zoom I personally dislike it
  gestureHandling: 'greedy',
  clickableIcons: false,
};

const BG_STYLE = {
  fillColor: 'transparent',
  strokeColor: 'white',
  strokeWeight: 6,
  strokeOpacity: 1,
  cursor: 'hand',
};

const FG_STYLE = {
  fillColor: 'transparent',
  strokeColor: 'blue',
  strokeWeight: 2,
  strokeOpacity: 1,
  cursor: 'hand',
};

// https://developers.google.com/maps/documentation/javascript/datalayer
// https://developers.google.com/maps/documentation/javascript/reference/data
const GeoJson = ({ children }) => {
  const { map } = useMap();

  React.useEffect(() => {
    let style = BG_STYLE;
    // To prevent style blink we override style inside addListener
    const addFeatureListener = map.data.addListener('addfeature', event => {
      map.data.overrideStyle(event.feature, style);
    });

    const features = [];
    // Add background white shaped border for better visibility
    features.push(...map.data.addGeoJson(children));

    // Add foreground  thinner border with primary color
    style = FG_STYLE;
    features.push(...map.data.addGeoJson(children));

    addFeatureListener.remove();

    return () => {
      features.forEach(feature => map.data.remove(feature));
    };
  }, [map, children]);

  return null;
};

export default function GeoJSONPage(): React.Node {
  const api = useGoogleApiLoader();

  return (
    <Ratio value={3 / 4}>
      {api && (
        <Map api={api} options={MAP_OPTIONS}>
          <GeoJson>{geoJSON}</GeoJson>
        </Map>
      )}
    </Ratio>
  );
}

const geoJSON = {
  type: 'Feature',
  geometry: {
    type: 'MultiPolygon',
    coordinates: [
      [
        [
          [6.166701, 46.224467],
          [6.165925, 46.222455],
          [6.1619, 46.215224],
          [6.155766, 46.217359],
          [6.151245, 46.216282],
          [6.151087, 46.215332],
          [6.150485, 46.215169],
          [6.1509, 46.214227],
          [6.150811, 46.214036],
          [6.14938, 46.214312],
          [6.149151, 46.214004],
          [6.1494, 46.213891],
          [6.148978, 46.213333],
          [6.149199, 46.213245],
          [6.149111, 46.213092],
          [6.148458, 46.213299],
          [6.148611, 46.213478],
          [6.148046, 46.213725],
          [6.14791, 46.213552],
          [6.146289, 46.214207],
          [6.146402, 46.214354],
          [6.146021, 46.214516],
          [6.145856, 46.214388],
          [6.145229, 46.214795],
          [6.145365, 46.214889],
          [6.144523, 46.215537],
          [6.140424, 46.215467],
          [6.140431, 46.214992],
          [6.140001, 46.214473],
          [6.140495, 46.21431],
          [6.140344, 46.213461],
          [6.139154, 46.211822],
          [6.138298, 46.212118],
          [6.137611, 46.212103],
          [6.137077, 46.212714],
          [6.136788, 46.212579],
          [6.136173, 46.21166],
          [6.136793, 46.21125],
          [6.136433, 46.210877],
          [6.135918, 46.210767],
          [6.136631, 46.210466],
          [6.136455, 46.210278],
          [6.135874, 46.210503],
          [6.135143, 46.210281],
          [6.135855, 46.209982],
          [6.135933, 46.208969],
          [6.135134, 46.20892],
          [6.135138, 46.20837],
          [6.1349, 46.208432],
          [6.134884, 46.208718],
          [6.133399, 46.209087],
          [6.133291, 46.20889],
          [6.132011, 46.209076],
          [6.131403, 46.209387],
          [6.131373, 46.209693],
          [6.130356, 46.210561],
          [6.129696, 46.210564],
          [6.12969, 46.210818],
          [6.129369, 46.21082],
          [6.129375, 46.211045],
          [6.129688, 46.211046],
          [6.129688, 46.211504],
          [6.12927, 46.211496],
          [6.129271, 46.212405],
          [6.129008, 46.212523],
          [6.129764, 46.213246],
          [6.129716, 46.213667],
          [6.128841, 46.213665],
          [6.127625, 46.214193],
          [6.126112, 46.214342],
          [6.125746, 46.214032],
          [6.123964, 46.214867],
          [6.124292, 46.215172],
          [6.121739, 46.215671],
          [6.119726, 46.216991],
          [6.120624, 46.217769],
          [6.122338, 46.216739],
          [6.123393, 46.21744],
          [6.124565, 46.217508],
          [6.125727, 46.218289],
          [6.126099, 46.218014],
          [6.127509, 46.219169],
          [6.128824, 46.220001],
          [6.129532, 46.219521],
          [6.129983, 46.219778],
          [6.129575, 46.22013],
          [6.130436, 46.220747],
          [6.130256, 46.220853],
          [6.130676, 46.221195],
          [6.130523, 46.221425],
          [6.130902, 46.221833],
          [6.13211, 46.221023],
          [6.13235, 46.221201],
          [6.132201, 46.221296],
          [6.133093, 46.221871],
          [6.132963, 46.221989],
          [6.133836, 46.222724],
          [6.132913, 46.223371],
          [6.133926, 46.224313],
          [6.132755, 46.22515],
          [6.131471, 46.22413],
          [6.131008, 46.224101],
          [6.129367, 46.225315],
          [6.128872, 46.225032],
          [6.127637, 46.22607],
          [6.127951, 46.226179],
          [6.128475, 46.225855],
          [6.130178, 46.227029],
          [6.12872, 46.228056],
          [6.127686, 46.227353],
          [6.126543, 46.22806],
          [6.127468, 46.228897],
          [6.127947, 46.2286],
          [6.128718, 46.228867],
          [6.131004, 46.230645],
          [6.131211, 46.230302],
          [6.132606, 46.230318],
          [6.133546, 46.231009],
          [6.133079, 46.231614],
          [6.132808, 46.231513],
          [6.132062, 46.232115],
          [6.132336, 46.232319],
          [6.131997, 46.232603],
          [6.132238, 46.232774],
          [6.131869, 46.233055],
          [6.132281, 46.233307],
          [6.132955, 46.23278],
          [6.134405, 46.233909],
          [6.135986, 46.234248],
          [6.136307, 46.234193],
          [6.137361, 46.233404],
          [6.13613, 46.232762],
          [6.136964, 46.231991],
          [6.138166, 46.231296],
          [6.135923, 46.230627],
          [6.136604, 46.230069],
          [6.13744, 46.228493],
          [6.137943, 46.228181],
          [6.139237, 46.228034],
          [6.13947, 46.228662],
          [6.138837, 46.228839],
          [6.138821, 46.22961],
          [6.138533, 46.230292],
          [6.142864, 46.2293],
          [6.143428, 46.230636],
          [6.143698, 46.230099],
          [6.145883, 46.228727],
          [6.145576, 46.227293],
          [6.146152, 46.226945],
          [6.146293, 46.227101],
          [6.146995, 46.226354],
          [6.148206, 46.226053],
          [6.148941, 46.227792],
          [6.166701, 46.224467],
        ],
      ],
    ],
  },
};

export const getStaticProps = async (): Promise<StaticProps> => {
  // The best is to place this method at _app.js but this doesn't work now
  const doc = await import('../dev-src/doc');
  return doc.getStaticProps();
};
