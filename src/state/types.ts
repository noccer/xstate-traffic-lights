export enum TrafficState {
  flowing = 'flowing',
  stopping = 'stopping',
  stopped = 'stopped',
}

export interface TrafficLightState {
  redState: LightState;
  orangeState: LightState;
  greenState: LightState;
}

export enum LightType {
  traffic = 'traffic',
  pedestrian = 'pedestrian',
}

export enum LightColour {
  red = 'red',
  orange = 'orange',
  green = 'green',
}

export enum LightState {
  on = 'on',
  blinking = 'blinking',
  off = 'off',
}
