# RGM

Tiny [1kb less](size-snapshot.txt#L4-L5) but very powerful React Google Map.

It allows you to render any React component on the Google Map, and provides easy access to native google map api.

[examples](https://realadvisor.github.io/rgm), [examples source](pages)

## Example

```javascript
import { Map, Overlay, Marker } from 'rgm';
...

<Map api={api} options={MAP_OPTIONS}>
  <Overlay debug={debug}>
    <Marker lat={lat} lng={lng}>
      <ReactComponent />
    </Marker>
  </Overlay>
</Map>
```

## Install

```bash
yarn add rgm
# or
npm install rgm
```

## API

### Map

Draws google map.

_properties_:

- **api** non nullable value of _window.google.maps_

- **options** see [MapOptions](https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions)
  or _(elt:HTMLDivElement) => MapOptions_ where _elt_ is map holder element.

- **ref** exposes instance of [google.maps.Map](https://developers.google.com/maps/documentation/javascript/reference/map)

### Overlay

Creates [overlay](https://developers.google.com/maps/documentation/javascript/examples/overlay-simple) to place React components inside.

_properties_:

- **debug** to control React component placements in dev mode [see example](https://realadvisor.github.io/rgm/react-markers)

### Marker

Wrapper around your component to pass _lat_, _lng_ into _Overlay_ in a type safe way wihout touching props of your component.

_properties_:

- **lat** latitude
- **lng** longitude

### useMap

hook to get access to instaces of [google.maps.Map](https://developers.google.com/maps/documentation/javascript/reference/map) and _window.google.maps_.

_returns:_

- { api, map } object, where _api_ is equal to _window.google.maps_ and _map_ is instance of [google.maps.Map](https://developers.google.com/maps/documentation/javascript/reference/map)

## Types

Flowtype, Typescript.

_For typescript usage you probably need to add [@types/googlemaps](https://www.npmjs.com/package/@types/googlemaps) into your project._

## Contribute

Get your api key at [Google](https://developers.google.com/maps/documentation/javascript/get-api-key)

Then start dev environment.

```bash
GOOGLE_API_KEY=<YOUR GOOGLE API KEY> yarn dev
```

## Why

_Why another library having that one of current library authors is also creator of [google-map-react](https://github.com/google-map-react/google-map-react)_

React map libraries along with the ability to draw react on a map are also trying to provide access to google map via declarative API. It needs a lot of hacks, code and opinionated decisions.

We created a library with ability to draw react components on a map providing minimal subset of properties needed to use native api or create any additional declarative api.

Soon will be 1 year as we are happy with it. Small amount of code makes it easy to support and extend.
