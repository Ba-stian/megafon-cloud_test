import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Books from './books';
import Authors from './authors';
import Profile from './profile';
import Login from './login';
import main from './main.css';

const Main = ({ ...props }) => (
	<main>
		<div className={main.layout}>
			<div className={main.container}>
				<Route exact path="/" render={() => <h2 className={main.header}>Welcome to Books SPA</h2>} />
				<Route path="/books" render={() => <Books isLogged={props.isLogged} />} />
				<Route path="/authors" component={Authors} />
				<Route path="/profile" render={() => <Profile isLogged={props.isLogged} />} />
				<Route path="/login" render={() => <Login {...props} />} />
			</div>
		</div>
	</main>
);

Main.propTypes = {
	onLogin: PropTypes.func.isRequired,
	isLogged: PropTypes.bool.isRequired,
	error: PropTypes.bool.isRequired,
};

export default Main;
