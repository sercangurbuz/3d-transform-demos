import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Setting, { SettingContainer } from './helpers/Setting';
import { adjustHue } from 'polished';

interface Carousel3DProps {}

type Orientation = 'horizontal' | 'vertical';

type CellProps = {
  angle?: number;
  radious?: number;
  orientation: Orientation;
};

type CarouselProps = {
  currentCell?: number;
  radious?: number;
  orientation: Orientation;
  theta: number;
};

const Scene3D = styled.div`
  width: 210px;
  height: 140px;
  perspective: 1000px;
`;

const Carousel = styled.div<CarouselProps>`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 1s;
  transform: ${({ radious, orientation, currentCell = 1, theta }) =>
    `translateZ(-${radious}px) ${
      orientation === 'horizontal'
        ? `rotateY(${currentCell * theta}deg)`
        : `rotateX(${currentCell * theta}deg)`
    }`};
`;

const Cell = styled.div<CellProps>`
  position: absolute;
  width: 190px;
  height: 120px;
  left: 10px;
  top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: #fff;
  font-weight: bold;
  border: 2px solid #141414;
  transition: transform 1s;
  transform: ${({ orientation, radious, angle }) =>
    `${
      orientation === 'horizontal'
        ? `rotateY(${angle}deg)`
        : `rotateX(${angle}deg)`
    } translateZ(${radious}px)`};
  background: ${({ angle = 0 }) => adjustHue(angle, 'hsla(0, 100%, 50%, 0.8)')};
`;

function Carousel3D(props: Carousel3DProps) {
  const [cellCount, setCellCount] = useState<number>(9);
  const [currentCell, setCurrentCell] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [orientation, setOrientation] = useState<Orientation>('horizontal');
  const [radius, setRadius] = useState<number>();

  useEffect(() => {
    const calcRadious = () => {
      const cellSize =
        orientation === 'horizontal'
          ? carouselRef.current?.offsetWidth
          : carouselRef.current?.offsetHeight;
      const radius = Math.round(cellSize! / 2 / Math.tan(Math.PI / cellCount));
      return radius;
    };

    const radious = calcRadious();
    setRadius(radious);
  }, [cellCount, orientation]);

  const slide = (dir: 'next' | 'prev') => () => {
    setCurrentCell((p) => (dir === 'prev' ? p + 1 : p - 1));
  };

  const theta = 360 / cellCount;

  return (
    <>
      <Scene3D>
        <Carousel
          currentCell={currentCell}
          orientation={orientation}
          radious={radius}
          theta={theta}
          ref={carouselRef}
        >
          {[...Array(cellCount).keys()].map((index) => (
            <Cell
              key={`key${index}`}
              orientation={orientation}
              radious={radius}
              angle={theta * index}
            >
              {index + 1}
            </Cell>
          ))}
        </Carousel>
      </Scene3D>
      <SettingContainer style={{ marginTop: 100 }}>
        <button onClick={slide('prev')}>Prev</button>
        <button onClick={slide('next')}>Next</button>
      </SettingContainer>
      <SettingContainer>
        {['horizontal', 'vertical'].map((direction) => (
          <Setting
            key={direction}
            id={direction}
            type="radio"
            label={direction}
            value={direction}
            checked={orientation === direction}
            onChange={(value) => setOrientation(value as Orientation)}
            name="directions"
          ></Setting>
        ))}
      </SettingContainer>
      <SettingContainer>
        <label>
          Cells ({cellCount})
          <input
            type="range"
            min="3"
            max="15"
            value={cellCount}
            onChange={(e) => setCellCount(Number(e.target.value))}
          />
        </label>
      </SettingContainer>
    </>
  );
}

export default Carousel3D;
