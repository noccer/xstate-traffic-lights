import { Machine, assign, createMachine } from 'xstate';

// Available variables:
// - Machine
// - interpret
// - assign
// - send
// - sendParent
// - spawn
// - raise
// - actions
// - XState (all XState exports)

const pedestrianStates = {
  initial: 'walk',
  id: 'pedestrian',
  states: {
    walk: {
      after: {
        3000: 'stopping',
      },
    },
    stopping: {
      after: {
        1000: 'stopped',
      },
    },
    stopped: {
      type: 'final',
    },
  },
  entry: ['resetPedestrianLight'],
  onDone: {
    target: 'allStopped',
  },
};

const lightStates = (direction) =>
  Machine<any, any, any>({
    id: direction,
    initial: 'green',
    states: {
      green: {
        after: {
          3000: 'orange',
        },
      },
      orange: {
        after: {
          1000: 'red',
        },
      },
      red: {
        type: 'final',
      },
    },
    onDone: {
      target: 'allStopped',
      actions: 'changeDirection',
    },
  });

const testy = {
  initial: 'green',
  context: {},
  states: {
    green: {
      after: {
        3000: 'orange',
      },
    },
    orange: {
      after: {
        1000: 'red',
      },
    },
    red: {},
  },
  onDone: {
    target: 'allStopped',
    actions: 'changeDirection',
  },
};

const setTrafficDirection = (dir) => (context, event) => {
  return context.direction === dir;
};

const testMachine = Machine({
  id: 'testM',
});

const eastWestMachine = lightStates('eastWest');

export const crossRoads = Machine(
  {
    key: 'light',
    id: 'myMachine',
    initial: 'idle',
    context: {
      direction: 'northSouth',
      buttonPressed: false,
    },
    states: {
      idle: {
        on: {
          START: 'allStopped',
        },
      },
      allStopped: {
        after: {
          3000: [
            {
              target: 'pedestrian',
              cond: 'isButtonPressed',
            },
            {
              target: 'eastWest',
              cond: setTrafficDirection('northSouth'),
            },
            {
              target: 'northSouth',
              cond: setTrafficDirection('eastWest'),
            },
          ],
        },
      },
      eastWest: {
        id: 'eastWest',
        initial: 'green',
        states: {
          green: {
            after: {
              3000: 'orange',
            },
          },
          orange: {
            after: {
              1000: 'red',
            },
          },
          red: {
            type: 'final',
          },
        },
        onDone: {
          target: 'allStopped',
          actions: 'changeDirection',
        },
      },
      northSouth: {
        ...lightStates('northSouth'),
      },
      // pedestrian: {
      //   ...pedestrianStates,
      // },
    },
    // on: {
    //   IDLE: {
    //     target: 'idle',
    //   },
    //   BUTTON_PRESS: {
    //     actions: ['pressPedestrianLight'],
    //     // target: "don't change, leave target alone, don't set to idle!",
    //   },
    // },
  },
  // {
  //   actions: {
  //     pressPedestrianLight: (context, event) => {
  //       console.log({ context, event });
  //       return assign({ direction: context.direction, buttonPressed: true });
  //     },
  //     resetPedestrianLight: assign({ buttonPressed: false }),
  //     changeDirection: assign({
  //       direction: (context, event) =>
  //         context.direction === 'northSouth' ? 'eastWest' : 'northSouth',
  //     }),
  //   },
  //   guards: {
  //     isButtonPressed: (context, event) => {
  //       return context.buttonPressed && context.direction === 'northSouth';
  //     },
  //   },
  // },
);
