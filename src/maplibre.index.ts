import type { Map } from 'maplibre-gl';
import { useMap as useMapGeneric } from './api/use-map';
import { useR3M } from './core/store';

export * from './api/canvas-props';
export * from './api/coordinates';
export * from './maplibre/canvas';

export const useMap = useMapGeneric<Map>;
export const useThreeMap = useR3M
