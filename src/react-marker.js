// @flow

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useMap } from './google-map';

type MarkerProps = {|
  lat: number,
  lng: number,
  children: React.Node,
|};

export const Marker = (props: MarkerProps) => {
  return props.children;
};

type OverlayProps = {|
  children?: React.ChildrenArray<null | boolean | React.Element<typeof Marker>>,
  // Debug is used to center markers right
  debug?: boolean,
|};

export const Overlay = (props: OverlayProps) => {
  const { api, map } = useMap();
  // because I have 2 ;-), doesnt matter here, will be set before 1st usage
  const pixelRatioRef = React.useRef(2);

  // $FlowFixMe no block level $FlowFixMe so splitted on 2 lines
  const anyChildren = (React.Children.toArray(props.children || []): any);

  const children: $ReadOnlyArray<React.Element<typeof Marker>> = anyChildren;

  const [overlay, setOverlay] = React.useState(null);

  const childrenRef = React.useRef<
    $ReadOnlyArray<React.Element<typeof Marker>>,
  >([]);

  const childrenDivRefs = React.useRef([]);

  const subPixelRound = v =>
    Math.round(v * pixelRatioRef.current) / pixelRatioRef.current;

  // We can't use useEffect here because it causes glitches
  // We need ref to access children in draw
  React.useLayoutEffect(() => {
    childrenRef.current = children;
  });

  // Create overlay https://developers.google.com/maps/documentation/javascript/examples/overlay-simple
  React.useEffect(() => {
    if (api) {
      pixelRatioRef.current = window.devicePixelRatio;

      const overlayView = new api.OverlayView();
      let elt = null;

      overlayView.onAdd = () => {
        elt = document.createElement('div');
        var panes = overlayView.getPanes();
        // on all other panes there is issues with events like hover etc
        panes.floatPane.appendChild(elt);

        setOverlay({
          element: elt,
          view: overlayView,
        });
      };

      overlayView.onRemove = () => {
        if (elt != null) {
          const { parentNode } = elt;
          if (parentNode != null) {
            // same as panes.overlayMouseTarget.removeChild
            parentNode.removeChild(elt);
          }
          setOverlay(null);
        }
      };

      overlayView.draw = () => {
        var projection = overlayView.getProjection();

        const latLngs = childrenRef.current;

        latLngs.forEach(({ props: { lat, lng } }, index) => {
          const { current: childElt } = childrenDivRefs.current[index];
          if (childElt != null) {
            const pos = projection.fromLatLngToDivPixel(
              new api.LatLng(lat, lng),
            );
            // Move react markers directly changing dom element position
            // Element is created by us, not by library user, so no issues
            childElt.style.left = subPixelRound(pos.x) + 'px';
            childElt.style.top = subPixelRound(pos.y) + 'px';
          }
        });
      };

      overlayView.setMap(map);

      return () => {
        overlayView.setMap(null);
      };
    }
  }, [api, map]);

  if (overlay != null && children != null && api != null) {
    const projection = overlay.view.getProjection();

    return ReactDOM.createPortal(
      children.map((ch, index) => {
        const pos = projection.fromLatLngToDivPixel(
          new api.LatLng(ch.props.lat, ch.props.lng),
        );

        // Its not a side effect, its just a cache for refs
        // instead of creating it initially like Array(MAX_POSSIBLE_MARKERS), we just extend it here
        if (childrenDivRefs.current[index] == null) {
          childrenDivRefs.current[index] = {
            current: (null: null | HTMLDivElement),
          };
        }

        return (
          <div
            key={ch.key}
            ref={childrenDivRefs.current[index]}
            style={{
              position: 'absolute',
              left: subPixelRound(pos.x),
              top: subPixelRound(pos.y),
              display: 'grid',
              gridTemplate: '0/0',
            }}
          >
            {ch}
            {(process.env.NODE_ENV !== 'production' ||
              process.env.DOCUMENTATION === 'true') &&
              props.debug === true && (
                <div
                  style={{
                    position: 'absolute',
                    borderRadius: '100%',
                    width: 4,
                    height: 4,
                    left: -2,
                    top: -2,
                    opacity: 0.8,
                    boxShadow:
                      '0 0 0 2px blue, 0 0 0 4px white, 0 0 0 6px blue',
                  }}
                />
              )}
          </div>
        );
      }),
      overlay.element,
    );
  }
  return null;
};
