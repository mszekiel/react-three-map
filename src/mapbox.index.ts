import type { Map } from 'mapbox-gl';
import { useMap as useMapGeneric } from './api/use-map';
import { useR3M } from './core/store';


export * from './api/canvas-props';
export * from './api/coordinates';
export * from './mapbox/canvas';

export const useMap = useMapGeneric<Map>;
export const useThreeMap = useR3M
