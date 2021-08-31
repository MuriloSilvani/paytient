import { Route, Switch } from 'react-router-dom';
import { FrameSwitch } from './style'

import Dashboard from '../../pages/Dashboard/index';
import Leads from '../../pages/Leads/index';
import Campaingns from '../../pages/Campaingns/index';
import Sales from '../../pages/Sales/index';
import Clients from '../../pages/Clients/index';
import Billing from '../../pages/Billing/index';
import Configurations from '../../pages/Configurations/index';

const Frame = () => {
  return (
    <FrameSwitch>
      <Switch>
        <Route path='/' exact component={Dashboard} />
        <Route path='/leads' component={Leads} />
        <Route path='/campaingns' component={Campaingns} />
        <Route path='/sales' component={Sales} />
        <Route path='/clients' component={Clients} />
        <Route path='/billing' component={Billing} />
        <Route path='/configurations' component={Configurations} />
      </Switch>
    </FrameSwitch>
  )
}

export default Frame
