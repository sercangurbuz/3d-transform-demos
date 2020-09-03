import React, { useState } from 'react';
import styled from 'styled-components';
import Setting from './helpers/Setting';

interface CardFlipProps {}

const Scene3D = styled.div`
  width: 200px;
  height: 260px;
  perspective: 600px;
  border: 1px dashed #666;
`;

const Card = styled.div<{ isFlipped?: boolean; isSlideFlip?: boolean }>`
  width: 100%;
  height: 100%;
  position: relative;
  cursor: pointer;
  transition: transform 1s;
  transform-style: preserve-3d;
  transform: ${({ isFlipped, isSlideFlip }) =>
    isFlipped
      ? isSlideFlip
        ? 'translateX(-100%) rotateY(-180deg)'
        : 'rotateY(180deg)'
      : undefined};
  transform-origin: ${({ isSlideFlip }) => isSlideFlip && 'center right'};
`;

const CardFace = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
  text-align: center;
  line-height: 260px;
  font-weight: bold;
  color: #fff;
`;

const FrontFace = styled(CardFace)`
  background: red;
`;

const BackFace = styled(CardFace)`
  background: blue;
  transform: rotateY(180deg);
`;

function CardFlip(props: CardFlipProps) {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [isSlideFlip, setIsSlideFlip] = useState<boolean>(false);

  const flipCard = () => {
    setIsFlipped((f) => !f);
  };

  const changeFlip = (value: boolean | string) => {
    setIsSlideFlip(value as boolean);
  };

  return (
    <>
      <Scene3D>
        <Card
          onClick={flipCard}
          isFlipped={isFlipped}
          isSlideFlip={isSlideFlip}
        >
          <FrontFace>Front</FrontFace>
          <BackFace>Back</BackFace>
        </Card>
      </Scene3D>
      <Setting
        onChange={changeFlip}
        id="slideFlip"
        label="Slide flip ?"
        checked={isSlideFlip}
      ></Setting>
    </>
  );
}

export default CardFlip;
