import React from 'react';
import styled from 'styled-components';

interface AnimationDemoProps {}

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  > *:not(:first-child) {
    margin-top: 10px;
  }
`;

const PerspectiveContainer = styled.div`
  perspective: 600px;
  position: relative;
  width: 220px;
  height: 220px;
  border: 1px solid black;
`;

const Box3D = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 2s;
`;

const Rotate3D = styled(Box3D)`
  background-color: hsla(240, 70%, 50%, 0.6);
  &:hover {
    transform: rotate3d(1,1,1,360deg)
  }
`;

const Translate3D = styled(Box3D)`
  background-color: hsla(120, 70%, 50%, 0.6);
  &:hover {
    transform: translateX(40px) translateY(40px) translateZ(50px)
  }
`;

const Square = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
`;

const BasicTransition = styled(Square)`
  transition: background-color 2s 5s, border-radius 3s 2s;

  &:hover {
    background-color: blue;
    border-radius: 50%;
  }
`;

const SkewSquare = styled(Square)`
  transition: transform 2s;
  &:hover {
    transform: skew(20deg);
  }
`;

const RotateSquare = styled(Square)`
  transition: transform 2s;
  &:hover {
    transform: rotate(360deg);
  }
`;

const TranslateSquare = styled(Square)`
  transition: transform 5s ease-in, background 3s 2s;
  &:hover {
    background-color: orange;
    transform: translateX(300px) rotate(360deg);
  }
`;

function AnimationDemo(props: AnimationDemoProps) {
  return (
    <Center>
      {/*   <BasicTransition />
      <SkewSquare />
      <RotateSquare />
      <TranslateSquare /> */}

      <PerspectiveContainer>
      {/*   <Rotate3D>
          <figure>ROTATE 3D</figure>
        </Rotate3D> */}
        <Translate3D>
        <figure>TRANSLATE 3D</figure>
        </Translate3D>
      </PerspectiveContainer>
    </Center>
  );
}

export default AnimationDemo;
