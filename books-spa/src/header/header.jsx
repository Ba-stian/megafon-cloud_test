import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import header from './header.css';


const Header = (props) => {
	const { isLogged, onLogout } = props;
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
								{isLogged ? <NavLink to="/" className={header.navlink} onClick={onLogout}>Выйти</NavLink>
									: <NavLink to="/login" className={header.navlink} activeClassName={header.active}>Войти</NavLink>}
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};

Header.propTypes = {
	isLogged: PropTypes.bool.isRequired,
	onLogout: PropTypes.func.isRequired,
};

export default Header;
