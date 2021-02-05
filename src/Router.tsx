import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import DeviceManagement from './App/DeviceManagement';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/device' component={DeviceManagement} />
        <Route component={() => <Redirect to='/device' />} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
