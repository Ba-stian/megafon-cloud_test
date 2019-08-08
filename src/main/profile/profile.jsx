import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import profile from './profile.css';


const Row = ({ content, label }) => (
	<div className={profile.row}>
		<label className={profile.label}>{label}</label>
		<p className={profile.content}>{content}</p>
	</div>
);

const Profile = (props) => {
	const { isLogged } = props;
	return (
		<div className={profile.profile}>
			<div className={profile.column}>
				<h1 className={profile.header}>Ваш профиль</h1>
				<img src="https://picsum.photos/300/300?random=1" alt="me" />
				<Row label="Имя" content="Иван" />
				<Row label="Фамилия" content="Петров" />
				<Row label="О себе" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius excepturi fugiat quia!" />
			</div>
			{isLogged || <Redirect to="/login" />}
		</div>
	);
};

Row.propTypes = {
	content: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
};

Profile.propTypes = {
	isLogged: PropTypes.bool.isRequired,
};

export default Profile;
