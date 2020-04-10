/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { LightType, Light, LightState, LightColour } from '../Light/Light';

interface TrafficLightProps {
  type: LightType;
}

const TrafficLightCSS = css``;

export const TrafficLight = ({ type }: TrafficLightProps) => {
  if (type === LightType.pedestrian) {
    return <Pedestrian />;
  }

  return <div css={TrafficLightCSS}>hello</div>;
};

const Pedestrian = () => {
  return (
    <div>
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
