import React from 'react';
import './App.css';
import ListView from './components/ListView'
import SubListView from "./components/SubListView";
import DetailView from "./components/DetailView";



import {
  BrowserRouter as Router,
  Route, Link
 } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App container ">
        <div className="row m-4">
          <div className="col-md-12">
            <div className="header">
              <Link to={"/"}>
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
        </div>

        <Route exact path={`/`} render={(props) => <ListView />} />

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
          render={(props) => <SubListView {...props} currentFilter="cuisine" />}
        />

        <Route
          exact
          path={`/category/:category/restaurant/:restaurantID`}
          render={(props) => <DetailView />}
        />
      </div>
      <footer className="text-center p-4">
        {" "}
        Data compiled by{" "}
        <a
          href="https://www.instagram.com/prosciuttogirl69/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @prosciuttogirl69
        </a>{" "}
        and
        <a
          href="https://www.instagram.com/prosciuttogirl69/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @taliamayden
        </a>{" "}
        and available&nbsp;
        <a
          href="https://docs.google.com/spreadsheets/d/18w-0RBhwBBlXDN9kRV9DVSCAGSCjtHb9K0Pq2YBv18U/edit#gid=1779563054"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .<br /> Made with 🖤 &nbsp; by{" "}
        <a
          href="https://richardsaethang.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          @checkthemethod
        </a>
        .
      </footer>
    </Router>
  );
}

export default App;
