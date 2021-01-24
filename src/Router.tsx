import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Top from './App/Top';
import MyPage from './App/MyPage';
import Products from './App/Products';
import Settings from './App/Settings';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path='/' component={Top} />
        <Route path='/mypage' component={MyPage} />
        <Route path='/settings' component={Settings} />
        <Route path='/products' component={Products} />
        <Route component={() => <Redirect to='/' />} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
