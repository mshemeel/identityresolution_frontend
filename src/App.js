import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Router, Switch, Route, Link } from "react-router-dom";
import { history } from './helper/history';

import ProfileComponent from './components/user.profile.component';
import SearchHistoryComponent from './components/search.history.component';

function App() {
  return (
    <Router history={history}>
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
          Full Contact App
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/history"} className="nav-link">
              History
            </Link>
          </li>
        </div>
      </nav>
      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/home"]} component={ProfileComponent} />
          <Route exact path="/history" component={SearchHistoryComponent} />
        </Switch>
      </div>

    </div>
    </Router>
  );
}

export default App;
