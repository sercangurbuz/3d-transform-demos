import React from 'react';
import { Link, BrowserRouter, Redirect, Route } from 'react-router-dom';
import CardFlip from './CardFlip';
import Cube from './Cube';
import Carousel from './Carousel';
import styled from 'styled-components';

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  > *:not(:first-child) {
    margin-top: 45px;
  }
`;

const SideMenu = styled.ul`
  position: fixed;
  left: 50px;
  top: calc(40% - 25px);
  border-left: 1px solid gray;
  padding: 0;
  line-height: 15px;
  margin: 0;
  > li {
    list-style: none;
    padding-left: 25px;
    &:not(:first-child) {
      margin-top: 10px;
    }
  }
`;

function App() {
  return (
    <>
      <BrowserRouter>
        <SideMenu>
          <li>
            <Link to="/card">Card</Link>
          </li>
          <li>
            <Link to="/cube">Cube</Link>
          </li>
          <li>
            <Link to="/carousel">Carousel</Link>
          </li>
        </SideMenu>
        <Center>
          <Route path="/card" component={CardFlip}></Route>
          <Route path="/cube" component={Cube}></Route>
          <Route path="/carousel" component={Carousel}></Route>
        </Center>
        <Redirect to="/card"></Redirect>
      </BrowserRouter>
    </>
  );
}

export default App;
