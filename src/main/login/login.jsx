import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import login from './login.css';

class Login extends Component {
	state = {
		email: '',
		password: '',
		errorMessage: '',
		isLogged: false,
	};

	onChange = (e) => {
		const { value, name } = e.target;
		this.setState({
			[name]: value,
		});
	};

	onLogin = (e) => {
		e.preventDefault();
		const { email, password } = this.state;
		if (!email && !password) {
			return;
		}
		if (email === 'Admin' && password === '123') {
			this.setState({
				isLogged: true,
			});
		} else {
			this.setState({
				errorMessage: 'Вы не зарегистрированы',
				password: '',
				email: '',
			});
		}
	};

	render() {
		const {
			email, password, errorMessage, isLogged,
		} = this.state;
		return (
			<div className={login.login}>
				<div className={login.form_group}>
					<form className={login.form} onSubmit={this.onLogin}>
						<h1 className={login.header}>Войдите на сайт</h1>
						{errorMessage && <p className={login.error}>{errorMessage}</p>}
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

export default Login;
