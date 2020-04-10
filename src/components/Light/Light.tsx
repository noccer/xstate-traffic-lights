/** @jsx jsx */
import { jsx, css } from '@emotion/core';

export enum LightType {
  traffic,
  pedestrian,
}

export enum LightColour {
  red,
  orange,
  green,
}

export enum LightState {
  on,
  blinking,
  off,
}

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
  bgColor: string;
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

const getBgColor = ({ colour }: { colour: LightColour }): string => {
  const { green, orange, red } = LightColour;
  switch (colour) {
    case green:
      return 'green';
    case orange:
      return 'orange';
    case red:
      return 'red';
    default:
      return 'green';
  }
};

export const Light = ({ state, type, colour }: LightProps) => {
  const bgColor = getBgColor({ colour });

  return (
    <div css={lightContainerCSS({ bgColor, type, state })}>
      <span role="img" aria-label="smile">
        .
      </span>
    </div>
  );
};
