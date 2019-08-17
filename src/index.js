import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch, Link } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Home from './components/home';
import { store, history } from './store';
import MyContext from './components/ContextState';
// import MyComponent from './components/MyComponent';

const MyComponent = React.lazy(() => import('./components/MyComponent'));

const App = () => {
	return (
		<div>
			<p className="text-center">Hello from React </p>
			<Link to="/test-route">Click me !</Link>
		</div>
	);
};

const routes = (
	<MyContext>
		<ConnectedRouter history={history}>
			<Suspense fallback={<div>Loading...</div>}>
				<Switch>
					<Route exact path="/" component={App} />
					<Route exact path="/test-route" component={MyComponent} />
				</Switch>
			</Suspense>
		</ConnectedRouter>
	</MyContext>
);
export default routes;

ReactDOM.render(<Provider store={store}>{routes}</Provider>, document.getElementById('root'));
//
