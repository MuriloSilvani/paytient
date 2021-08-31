import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import SideBar from '../components/SideBar'
import TopBar from '../components/TopBar'
import Frame from '../components/Frame'

import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
`

const Routes = () => {
  return (
    <BrowserRouter>
      <Container>
        <SideBar />

        <Container
          direction="column"
        >
          <TopBar />
          <Frame />
        </Container>

      </Container>
    </BrowserRouter>
  )
}

export default Routes
