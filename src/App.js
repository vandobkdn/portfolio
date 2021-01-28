import React from "react";
import {Switch, Route, Redirect } from "react-router-dom";
import "styles/main.css";
import "./App.css"
import {UserInfo, Links, Logo} from "components";
import {Introduction, Experience, SocialNetwork, PageNotFound} from "pages";

function App() {
  return (
      <main className="h-screen bg-gradient-to-r from-green-300 to-blue-400 flex items-center justify-center">
          <section className="container bg-white w-screen h-11/12 md:w-4/5 lg:w-4/5 lg:h-4/5">
              <div className="dashboard text-gray-500 text-opacity-80">
                  <UserInfo />
                  <Links />
                  <Logo />
              </div>
              <div className="content">
                  <Switch>
                      <Route exact path="/" render={() => <Redirect to="/profile" />} />
                      <Route exact path='/profile' component={Introduction} />
                      <Route path='/work-at' component={Experience} />
                      <Route exact path='/social-networks' component={SocialNetwork} />
                      <Route path='**' component={PageNotFound} />
                  </Switch>
              </div>
          </section>
      </main>
  );
}

export default App;
