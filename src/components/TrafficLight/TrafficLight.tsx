/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Light } from '../Light/Light';
import {
  LightType,
  LightState,
  LightColour,
  TrafficState,
} from '../../state/types';
import { mapTrafficStateToTrafficLightState } from '../../state/utils';
import { useMachine } from '@xstate/react';
import { crossRoads } from '../../state/machine';
import { CHANGE } from '../../state/constants';

interface TrafficLightProps {
  type: LightType;
}

const TrafficLightCSS = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonCSS = css`
  background-color: white;
  border: none;
  border-radius: 5px;
  padding: 16px;
  font-size: 16px;
  line-height: 16px;
  cursor: pointer;
`;

export const TrafficLight = ({ type }: TrafficLightProps) => {
  const [trafficState, onTransition] = useMachine<typeof TrafficState, any>(
    crossRoads,
  );

  if (type === LightType.pedestrian) {
    return <PedestrianLight />;
  }

  const {
    redState,
    orangeState,
    greenState,
  } = mapTrafficStateToTrafficLightState(trafficState);

  const onClick = (event: any) => {
    onTransition(CHANGE);
  };

  return (
    <div css={TrafficLightCSS}>
      <Light
        state={redState}
        colour={LightColour.red}
        type={LightType.traffic}
      />
      <Light
        state={orangeState}
        colour={LightColour.orange}
        type={LightType.traffic}
      />
      <Light
        state={greenState}
        colour={LightColour.green}
        type={LightType.traffic}
      />
      <br />
      <button css={ButtonCSS} onClick={onClick}>
        Transition
      </button>
    </div>
  );
};

const PedestrianLightCSS = css``; // TODO
const PedestrianLight = () => {
  return (
    <div css={PedestrianLightCSS}>
      <Light
        state={LightState.on}
        colour={LightColour.red}
        type={LightType.pedestrian}
      />
      <Light
        state={LightState.off}
        colour={LightColour.green}
        type={LightType.pedestrian}
      />
    </div>
  );
};
