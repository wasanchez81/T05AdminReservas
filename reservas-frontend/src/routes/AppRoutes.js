import React from "react";
import {
  Redirect,
  Switch,
  Route
} from "react-router-dom";
import AuthPage from '../page/AuthPage';
import ReservationPage from '../page/ReservationPage'
import DashboardPage from  '../page/DashboardPage'

export default function Routes() {
  return (

      <Switch>
        <Route path="/auth/login" component={AuthPage} />
        <Route path="/dashboard/reservations" component={ReservationPage} />
        <Route path="/dashboard" component={DashboardPage} />
        <Redirect to="/dashboard" />
      </Switch>
  );
}
