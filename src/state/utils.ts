import { TrafficLightState, TrafficState, LightState } from './types';
import { State } from 'xstate';

export const mapTrafficStateToTrafficLightState = (
  trafficState: State<TrafficState, any, any, any>,
): TrafficLightState => {
  const { value } = trafficState;
  return {
    redState: value === TrafficState.stopped ? LightState.on : LightState.off,
    orangeState:
      value === TrafficState.stopping ? LightState.on : LightState.off,
    greenState: value === TrafficState.flowing ? LightState.on : LightState.off,
  };
};
