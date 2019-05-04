import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from '../HomePage/HomePage';
import LoginSignUp from '../../components/LoginSignUp/LoginSignUp';
import PageNotFound from '../PageNotFound/PageNotFound';


const Header = () => (
  <header>
      <div>
          <HomePage />
      </div>
  </header>
);

class Mainpage extends Component {
  render() {
    return (
      <div>
        <div>
          <Switch>
            <Route path="/" exact component={Header} />
            <Route path="/LoginSignUp" exact component={LoginSignUp} />
            <Route path="*" exact={true} component={PageNotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Mainpage;
