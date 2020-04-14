import { Machine } from 'xstate';
import { TrafficState } from './types';
import { TRANSITION } from './constants';

export const crossRoads = Machine({
  id: 'crossRoads',
  initial: TrafficState.stopped,
  states: {
    [TrafficState.stopped]: {
      on: { [TRANSITION]: TrafficState.flowing },
    },
    [TrafficState.flowing]: {
      on: { [TRANSITION]: TrafficState.stopping },
    },
    [TrafficState.stopping]: {
      on: {
        [TRANSITION]: TrafficState.stopped,
      },
    },
  },
});
