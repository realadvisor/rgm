/// <reference types="googlemaps" />

import * as React from 'react';

export declare const Map: (props: {
  ref?: React.Ref<google.maps.Map<HTMLDivElement>>;
  children?: React.ReactNode;
  api: typeof google.maps;
  options:
    | google.maps.MapOptions
    | ((holder: HTMLDivElement) => google.maps.MapOptions);
}) => JSX.Element;

export declare const Marker: (props: {
  lat: number;
  lng: number;
  children: React.ReactNode;
}) => JSX.Element;

export declare const Overlay: (props: {
  debug?: boolean;
  children: React.ReactNode;
}) => JSX.Element;

type MapContextType = {
  api: typeof google.maps;
  map: google.maps.Map<HTMLDivElement>;
};

export declare const useMap: () => MapContextType;
