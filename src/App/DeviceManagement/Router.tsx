import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Products from './Products';
import Management from './Management';
import Delivery from './Delivery';
import Top from './Top';
import Settings from './Settings';
import MyPage from './MyPage';

const baseUrl = '/device'

const Router: React.FC = () => {
  return (
    <Switch>
      <Route path={`${baseUrl}/management`} component={Management} />
      <Route path={`${baseUrl}/products`} component={Products} />
      <Route path={`${baseUrl}/settings`} component={Settings} />
      <Route path={`${baseUrl}/mypage`} component={MyPage} />
      <Route path={`${baseUrl}/delivery`} component={Delivery} />
      <Route path={baseUrl} component={Top} />
      <Route component={() => <Redirect to={baseUrl} />} />
    </Switch>
  );
}

export default Router;
