import React, { Component } from 'react';
import Header from './header';
import Main from './main';


class App extends Component {
	state = {
		isLogged: false,
		error: false,
	};

	onLogin = (data) => {
		if (data[0] === 'Admin' && data[1] === '123') {
			this.setState({
				isLogged: true,
			});
		} else {
			this.setState({ error: true });
		}
	};

	onLogout = () => {
		this.setState({
			isLogged: false,
		});
	};

	render() {
		const { isLogged, error } = this.state;
		return (
			<div>
				<Header isLogged={isLogged} onLogout={this.onLogout} />
				<Main onLogin={this.onLogin} error={error} isLogged={isLogged} />
			</div>
		);
	}
}

export default App;
