import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SideBar from '../components/SideBar'

import Dashboard from '../pages/Dashboard/index';
import Leads from '../pages/Leads/index';
import Campaingns from '../pages/Campaingns/index';
import Sales from '../pages/Sales/index';
import Clients from '../pages/Clients/index';
import Billing from '../pages/Billing/index';
import Configurations from '../pages/Configurations/index';

import styled from 'styled-components'

const Container = styled.div`
  display: flex;
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

        <Switch>
          <Route path='/' exact component={Dashboard} />
          <Route path='/leads' component={Leads} />
          <Route path='/campaingns' component={Campaingns} />
          <Route path='/sales' component={Sales} />
          <Route path='/clients' component={Clients} />
          <Route path='/billing' component={Billing} />
          <Route path='/configurations' component={Configurations} />
        </Switch>
      </Container>
    </BrowserRouter>
  )
}

export default Routes
