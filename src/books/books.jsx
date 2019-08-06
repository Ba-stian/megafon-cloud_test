import React, { Component } from 'react';
import mockdata from './mockdata.json';
import books from './books.css';

class Books extends Component {
	state = {
		visibleBooks: mockdata,
		expand: false,
	};


	onClick = () => {
		const { expand } = this.state;
		this.setState({
			expand: !expand,
		});
	};


	renderTable() {
		const { expand, visibleBooks } = this.state;
		const table = expand ? visibleBooks : visibleBooks.slice(0, 250);
		return table.map(({ title, author, popularity }) => (
			<tr key={author} className={books.rows}>
				<td className={books.cells}>{title}</td>
				<td className={books.cells}>{author}</td>
				<td className={books.cells}>{popularity}</td>
			</tr>
		));
	}


	render() {
		const { expand } = this.state;
		return (
			<div>
				<table className={books.table}>
					<caption className={books.caption}>Рейтинг книг</caption>
					<thead>
						<tr>
							<td className={books.header}>Название</td>
							<td className={books.header}>Автор</td>
							<td className={books.header}>Популярность</td>
						</tr>
					</thead>
					<tbody>
						{this.renderTable()}
					</tbody>
				</table>
				<div className={books.button}>
					<button type="button" onClick={this.onClick} className={books.btn}>
						{!expand ? 'Показать ещё' : 'Скрыть'}
					</button>
				</div>
			</div>
		);
	}
}

export default Books;
