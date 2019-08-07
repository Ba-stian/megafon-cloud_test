import React, { Component } from 'react';
import authors from './authors.css';
import mockdata from '../books/mockdata.json';

class Authors extends Component {
	state = {
		value: '',
		term: '',
	};

	/* сделаем инпут контролируемым */
	onChange = (e) => {
		this.setState({
			value: e.target.value,
		});
	};

	/* симуляция сабмита, значение запишем в стэйт, чтобы его можно было обработать */
	onSearchSubmit = (e) => {
		e.preventDefault();
		const { value } = this.state;
		if (!value.length) {
			return;
		}
		this.setState({
			term: value,
			value: '',
		});
	};

	/* функция отрисовки найденых книг */
	renderBooks() {
		const { term } = this.state;
		const filtredBooks = mockdata.filter(book => (
			book.author.toLowerCase().indexOf(term.toLowerCase()) !== -1));
		return filtredBooks.map(({ title, author }) => (
			<div className={authors.filtred_books} key={Math.random()}>
				<p className={authors.filtred_book}>{author}</p>
				<p className={authors.filtred_book}>{title}</p>
			</div>
		));
	}

	render() {
		const { value, term } = this.state;
		return (
			<div className={authors.authors}>
				<div className={authors.form_group}>
					<form className={authors.form} onSubmit={this.onSearchSubmit}>
						<input
							className={authors.input}
							type="text"
							placeholder="Поиск по автору"
							value={value}
							onChange={this.onChange}
						/>
						<button type="submit" className={authors.btn} />
					</form>
				</div>
				<div className={authors.books}>
					{term && this.renderBooks()}
				</div>
			</div>
		);
	}
}

export default Authors;
