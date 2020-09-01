import React from 'react';
import styled, { keyframes } from 'styled-components';
import backgroundImg from './images/background.jpg'
import rockyDashedImg from './images/rocky-dashed.svg'

interface HeaderProps {}

const fadeSlideDown = keyframes`
 0% {
    opacity: 0;
    transform: translateY(-4rem);
  }
  100% {
    opacity: 1;
    transform: none;
  }`;

const StyledHeader = styled.header`
  align-items: center;
  display: flex;
  font-size: 18px;
  height: 100vh;
  justify-content: center;
  overflow: hidden;
  position: relative;
  text-align: center;
  transform-style: preserve-3d;
  perspective: 100px;

  &:before {
    animation: ${fadeSlideDown} 2s 0.5s cubic-bezier(0, 0.5, 0, 1) forwards;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)),
      url(${backgroundImg}) no-repeat bottom;
    background-size: cover;
    bottom: 0;
    content: '';
    left: 0;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
  }

  &:after {
    background: #f9fcff;
    content: '';
    height: 40rem;
    left: -5%;
    position: absolute;
    right: -5%;
    top: 90%;
    transform: rotateZ(-4deg);
    transform-origin: 0 0;
    z-index: 0;
  }
`;

const HeaderTitle = styled.h1`
  color: #fff;
`;

const HeaderSubTitle = styled.h3`
  color: #fff;
  margin-bottom: 5rem;
  text-transform: uppercase;
`;

const HeaderButton = styled.p`
  position: relative;
  transform: translateZ(0.1px);
  z-index: 10;
`;

function Header(props: HeaderProps) {
  return (
    <StyledHeader>
      <section>
        <img src={rockyDashedImg} />
        <HeaderTitle>Your awesome landing page</HeaderTitle>
        <HeaderSubTitle>A useful start for your projects</HeaderSubTitle>
        <HeaderButton>
          <a href="#calls-to-action" className="button">
            Get started today
          </a>
        </HeaderButton>
      </section>
    </StyledHeader>
  );
}

export default Header;
