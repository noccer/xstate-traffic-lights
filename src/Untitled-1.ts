import { Machine } from 'xstate/lib/Machine';

const lightDelayMachine = Machine({
  id: 'lightDelay',
  initial: 'green',
  states: {
    green: {
      after: {
        // after 1 second, transition to yellow
        5000: 'yellow',
      },
    },
    yellow: {
      after: {
        // after 0.5 seconds, transition to red
        2000: 'red',
      },
    },
    red: {
      after: {
        // after 2 seconds, transition to green
        10000: {
          target: 'greenPedestrian',
          cond: 'pedestrianLightPressed',
        },
        9000: {
          target: 'green',
        },
      },
    },
    greenPedestrian: {
      after: {
        15000: 'green',
      },
    },
  },
});
