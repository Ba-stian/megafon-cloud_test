import React, { Component } from 'react';
import PropTypes from 'prop-types';
import books from './books.css';


export default class BooksItem extends Component {
	state = {
		showInput: false,
		value: '',
		comment: '',
	};

	addComment = () => {
		this.setState({
			showInput: true,
		});
	};

	onChange = (e) => {
		this.setState({
			value: e.target.value,
		});
	};

	onCommentSubmit = (e) => {
		e.preventDefault();
		const { value } = this.state;
		this.setState({
			comment: value,
			value: '',
		});
	};

	render() {
		const {
			title, author, popularity, isLogged,
		} = this.props;
		const { showInput, value, comment } = this.state;
		return (
			<tr className={books.rows}>
				<td className={books.cells}>
					{title}
					{showInput && (
						<div>
							<form onSubmit={this.onCommentSubmit}>
								<input
									className={books.input}
									type="text"
									value={value}
									onChange={this.onChange}
									placeholder="Комментарий по книге"
								/>
							</form>
							<p>{comment}</p>
						</div>
					) }
				</td>
				<td className={books.cells}>{author}</td>
				<td className={books.cells}>{popularity}</td>
				{isLogged && (
					<td>
						<button type="button" onClick={this.addComment}>Добавить комментарий</button>
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
