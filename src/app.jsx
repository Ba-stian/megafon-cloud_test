import React, { Component } from 'react';
import Header from './header';
import Main from './main';


class App extends Component {
	state = {
		isLogged: false,
	};

	onLogin = (data) => {
		if (data[0] === 'Admin' && data[1] === '123') {
			this.setState({
				isLogged: true,
			});
		}
	};

	logOut = () => {
		this.setState({
			isLogged: false,
		});
	};

	render() {
		const { isLogged } = this.state;
		return (
			<div>
				<Header isLogged={isLogged} logOut={this.logOut} />
				<Main onLogin={this.onLogin} isLogged={isLogged} />
			</div>
		);
	}
}

export default App;
