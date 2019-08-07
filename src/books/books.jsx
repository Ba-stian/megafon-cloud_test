import React, { Component } from 'react';
import mockdata from './mockdata.json';
import books from './books.css';

class Books extends Component {
	state = {
		visibleBooks: mockdata,
		expand: false,
		direction: 'desc',
	};


	onClick = () => {
		const { expand } = this.state;
		this.setState({
			expand: !expand,
		});
	};


	sortItems(e, sortKey) {
		const { visibleBooks, direction } = this.state;
		if (direction === 'desc') {
			if (sortKey === 'popularity') {
				visibleBooks.sort((a, b) => a[sortKey] - b[sortKey]);
			} else {
				visibleBooks.sort((a, b) => a[sortKey].localeCompare(b[sortKey]));
			}
			this.setState({ direction: 'asc' });
		} else {
			if (sortKey === 'popularity') {
				visibleBooks.sort((a, b) => b[sortKey] - a[sortKey]);
			} else {
				visibleBooks.sort((a, b) => b[sortKey].localeCompare(a[sortKey]));
			}
			this.setState({ direction: 'desc' });
		}


		this.setState({ visibleBooks });
	}


	renderTable() {
		const { expand, visibleBooks } = this.state;
		const table = expand ? visibleBooks : visibleBooks.slice(0, 250);
		return table.map(({ title, author, popularity }) => (
			<tr key={Math.random()} className={books.rows}>
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
							<td>
								<button
									className={books.sort_btn}
									type="button"
									onClick={e => this.sortItems(e, 'title')}
								>
									Название
								</button>
							</td>
							<td>
								<button
									className={books.sort_btn}
									type="button"
									onClick={e => this.sortItems(e, 'author')}
								>
									Автор
								</button>
							</td>
							<td>
								<button
									className={books.sort_btn}
									type="button"
									onClick={e => this.sortItems(e, 'popularity')}
								>
									Популярность
								</button>
							</td>
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
