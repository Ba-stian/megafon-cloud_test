import React from 'react';
import { NavLink } from 'react-router-dom';
import header from './header.css';


const Header = () => (
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
							<NavLink to="/login" className={header.navlink} activeClassName={header.active}>Войти</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</header>
);

export default Header;
