import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch, Link } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home';
import { store, history } from './store';

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
		<Switch>
			<Route exact path="/" component={App} />
			<Route exact path="/about-me" component={Home} />
		</Switch>
	</ConnectedRouter>
);
export default routes;

ReactDOM.render(<Provider store={store}>{routes}</Provider>, document.getElementById('root'));
//
