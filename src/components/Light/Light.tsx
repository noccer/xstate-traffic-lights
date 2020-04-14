/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { LightType, LightState, LightColour } from '../../state/types';

interface LightProps {
  type: LightType;
  state: LightState;
  colour: LightColour;
}

const lightContainerCSS = ({
  bgColor,
  type,
  state,
}: {
  bgColor: LightColour;
  type: LightType;
  state: LightState;
}) => css`
  border-radius: ${type === LightType.pedestrian ? 5 : 9999}px;
  opacity: ${state === LightState.on ? 100 : 20}%;
  border: 2px solid black;
  width: 50px;
  height: 50px;
  background-color: ${bgColor};
`;

export const Light = ({ state, type, colour }: LightProps) => {
  return <div css={lightContainerCSS({ bgColor: colour, type, state })}></div>;
};
