import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import createBrowserHistory from 'history/createBrowserHistory';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home';
import store from './store';

const history = createBrowserHistory();
const App = () => {
	return (
		<div>
			<p>Hello from React </p>
			<Link to="/about-me">Books</Link>
		</div>
	);
};

const routes = (
	<ConnectedRouter history={history}>
		<Router>
			<Switch>
				<Route exact path="/" component={App} />
				<Route path="/about-me" component={Home} />
			</Switch>
		</Router>
	</ConnectedRouter>
);
export default routes;

ReactDOM.render(<Provider store={store}>{routes}</Provider>, document.getElementById('root'));
//
