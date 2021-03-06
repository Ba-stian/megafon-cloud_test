import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import login from './login.css';

class Login extends Component {
	state = {
		email: '',
		password: '',
		errorMessage: 'Вы не зарегистрированы',
		isLogged: false,
	};

	onChange = (e) => {
		const { value, name } = e.target;
		this.setState({
			[name]: value,
		});
	};

	/* функция авторизации, данные записанные в стэйт сохраняем,
	чтобы передать в родительский компонент */
	onLogin = (e) => {
		e.preventDefault();
		const { email, password } = this.state;
		const data = [email, password];
		const { onLogin } = this.props;
		if (!email && !password) {
			return;
		}
		this.setState({
			password: '',
			email: '',
		});
		onLogin(data);
	};

	render() {
		const { email, password, errorMessage } = this.state;
		const { error, isLogged } = this.props;
		return (
			<div className={login.login}>
				<div className={login.form_group}>
					<form className={login.form} onSubmit={this.onLogin}>
						<h1 className={login.header}>Войдите на сайт</h1>
						{error && <p className={login.error}>{errorMessage}</p>}
						<input
							type="text"
							value={email}
							className={login.input}
							onChange={this.onChange}
							name="email"
							placeholder="Введите ваш логин"
							autoComplete="off"
						/>
						<input
							type="password"
							value={password}
							className={login.input}
							onChange={this.onChange}
							name="password"
							placeholder="Введите пароль"
						/>
						<button type="submit" className={login.btn}>Войти</button>
					</form>
				</div>
				{isLogged && <Redirect to="/profile" />}
			</div>
		);
	}
}

Login.propTypes = {
	onLogin: PropTypes.func.isRequired,
	error: PropTypes.bool.isRequired,
	isLogged: PropTypes.bool.isRequired,
};

export default Login;
