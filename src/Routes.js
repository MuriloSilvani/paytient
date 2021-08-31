import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SideBar from './components/SideBar'

import Dashboard from './pages/Dashboard/index';
import Leads from './pages/Leads/index';

import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
`

export default function Routes() {
  return (
    <BrowserRouter>
      <Container>
        <SideBar />

        <Switch>
          <Route path='/' exact component={Dashboard} />
          <Route path='/leads' component={Leads} />
        </Switch>
      </Container>
    </BrowserRouter>
  )
}