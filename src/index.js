import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom';
// import createBrowserHistory from 'history/createBrowserHistory';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home';

// const history = createBrowserHistory();

const App = () => {
	return (
		<div>
			<p>Hello from React </p>
			<Link to="/about-me">Books</Link>
		</div>
	);
};

const routes = (
	<Router>
		<Switch>
			<Route exact path="/" component={withRouter(App)} />
			<Route path="/about-me" component={Home} />
		</Switch>
	</Router>
);
export default routes;

ReactDOM.render(routes, document.getElementById('root'));
//
