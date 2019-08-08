import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import header from './header.css';


class Header extends Component {
	/* принимаем обработчик из родительского компонента */
	logOut = () => {
		const { logOut } = this.props;
		logOut();
	};

	render() {
		const { isLogged } = this.props;
		return (
			<header>
				<div className={header.layout}>
					<div className={header.container}>
						<nav className={header.nav}>
							<ul className={header.nav_items}>
								<li>
									<NavLink to="/books" className={header.navlink} activeClassName={header.active}>Книги</NavLink>
								</li>
								<li>
									<NavLink to="/authors" className={header.navlink} activeClassName={header.active}>Авторы</NavLink>
								</li>
								<li>
									<NavLink to="/profile" className={header.navlink} activeClassName={header.active}>Профиль</NavLink>
								</li>
								<li>
									{isLogged ? <NavLink to="/" className={header.navlink} onClick={this.logOut}>Выйти</NavLink>
										: <NavLink to="/login" className={header.navlink} activeClassName={header.active}>Войти</NavLink>}
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</header>
		);
	}
}

Header.propTypes = {
	isLogged: PropTypes.bool.isRequired,
	logOut: PropTypes.func.isRequired,
};

export default Header;
