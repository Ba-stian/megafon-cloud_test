import React, { Component } from 'react';
import PropTypes from 'prop-types';
import books from './books.css';


export default class BooksItem extends Component {

	render() {
		const {
			title, author, popularity, isLogged,
		} = this.props;
		return (
			<tr className={books.rows}>
				<td className={books.cells}>
					{title}
				</td>
				<td className={books.cells}>{author}</td>
				<td className={books.cells}>{popularity}</td>
				{isLogged && (
					<td>
						<button type="button">Добавить комментарий</button>
					</td>
				)
				}
			</tr>
		);
	}
}

BooksItem.propTypes = {
	title: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	popularity: PropTypes.number.isRequired,
	isLogged: PropTypes.bool.isRequired,
};
