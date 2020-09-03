import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Setting, { SettingContainer } from './helpers/Setting';

interface CubeProps {}

type RotateDirections = 'left' | 'right' | 'top' | 'bottom' | 'back' | 'front';

const Scene3D = styled.div`
  width: 200px;
  height: 200px;
  perspective: 600px;
`;

const Cube = styled.div<{
  rotateDirection?: RotateDirections;
}>`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  /* this prevents font anti-aliasing distorting */
  transform: translateZ(-100px);
  transition: transform 1s;

  ${({ rotateDirection }) =>
    rotateDirection &&
    css`
      transform: translateZ(-100px)
        ${(rotateDirection === 'right' && 'rotateY(-90deg)') ||
        (rotateDirection === 'back' && 'rotateY(-180deg)') ||
        (rotateDirection === 'left' && 'rotateY(90deg)') ||
        (rotateDirection === 'top' && 'rotateX(-90deg)') ||
        (rotateDirection === 'bottom' && 'rotateX(90deg)')};
    `}
`;

const Face = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  line-height: 200px;
  font-size: 40px;
  font-weight: bold;
  color: white;
  text-align: center;
`;

const Front = styled(Face)`
  transform: translateZ(100px);
  background: hsla(0, 100%, 50%, 0.7);
`;
const Back = styled(Face)`
  transform: rotateY(180deg) translateZ(100px);
  background: hsla(120, 100%, 50%, 0.7);
`;
const Left = styled(Face)`
  transform: rotateY(-90deg) translateZ(100px);
  background: hsla(180, 100%, 50%, 0.7);
`;
const Right = styled(Face)`
  transform: rotateY(90deg) translateZ(100px);
  background: hsla(60, 100%, 50%, 0.7);
`;
const Bottom = styled(Face)`
  transform: rotateX(-90deg) translateZ(100px);
  background: hsla(300, 100%, 50%, 0.7);
`;
const Top = styled(Face)`
  transform: rotateX(90deg) translateZ(100px);
  background: hsla(240, 100%, 50%, 0.7);
`;

function Cube3D(props: CubeProps) {
  const [rotateDirection, setRotateDirection] = useState<RotateDirections>(
    'front'
  );

  const changeRotation = (value: boolean | string) => {
    setRotateDirection(value as RotateDirections);
  };

  return (
    <>
      <Scene3D>
        <Cube rotateDirection={rotateDirection as RotateDirections}>
          <Front>Front</Front>
          <Back>Back</Back>
          <Right>Right</Right>
          <Left>Left</Left>
          <Top>Top</Top>
          <Bottom>Bottom</Bottom>
        </Cube>
      </Scene3D>

      <SettingContainer>
        {['front', 'left', 'right', 'top', 'bottom', 'back'].map(
          (direction) => (
            <Setting
              key={direction}
              id={direction}
              type="radio"
              label={direction}
              value={direction}
              checked={rotateDirection === direction}
              onChange={changeRotation}
              name="directions"
            ></Setting>
          )
        )}
      </SettingContainer>
    </>
  );
}

export default Cube3D;
