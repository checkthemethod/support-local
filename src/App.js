import React from 'react';
import './App.css';
import ListView from './components/ListView'
import SubListView from "./components/SubListView";
import DetailView from "./components/DetailView";



import {
  BrowserRouter as Router,
  Route, Link, Redirect
 } from 'react-router-dom';


function App() {
  return (
      <Router>
        <div className="App container ">
          <div className="row m-4">
            <div className="col-md-12">
              <Link to={"/all"}>
                <h1 className="text-center">
                  Support L
                  <span className="heart" role="img" aria-label="black-heart">
                    🖤
                  </span>
                  cal Businesses
                </h1>
              </Link>
            </div>
          </div>
          <Route
            exact
            path={`/`}
            render={(props) => <Redirect replace to={`/all`} />}
          />

          <Route exact path={`/all`} render={(props) => <ListView />} />

          <Route
            exact
            path={`/neighborhood/:category`}
            render={(props) => (
              <SubListView {...props} currentFilter="neighborhood" />
            )}
          />
          <Route
            exact
            path={`/cuisine/:category`}
            render={(props) => (
              <SubListView {...props} currentFilter="cuisine" />
            )}
          />

          <Route
            exact
            path={`/category/:category/restaurant/:restaurantID`}
            render={(props) => <DetailView />}
          />
        </div>
      </Router>
  );
}

export default App;
