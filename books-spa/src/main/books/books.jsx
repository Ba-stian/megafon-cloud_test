import React, { Component } from 'react';
import PropTypes from 'prop-types';
import mockdata from './mockdata.json';
import books from './books.css';

class Books extends Component {
	state = {
		visibleBooks: mockdata,
		expand: false,
		direction: 'desc',
	};


	/* изменяет флаг expand, если true, то отображается весь массив книг, если false, то первые 250 */
	onClick = () => {
		const { expand } = this.state;
		this.setState({
			expand: !expand,
		});
	};

	/* сортировка по возрастанию и убыванию, использующая ключ объекта.
	исключение для популярности, т.к. не строка */

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

	/* метод отрисовки таблицы */

	renderTable() {
		const { expand, visibleBooks } = this.state;
		const { isLogged } = this.props;
		const table = expand ? visibleBooks : visibleBooks.slice(0, 250);
		return table.map(({ title, author, popularity }) => (
			<tr key={Math.random()} className={books.rows}>
				<td className={books.cells}>{title}</td>
				<td className={books.cells}>{author}</td>
				<td className={books.cells}>{popularity}</td>
				{isLogged && (
					<React.Fragment>
						<button type="button">Добавить комментарий</button>
					</React.Fragment>
				)
				}
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

Books.propTypes = {
	isLogged: PropTypes.bool.isRequired,
};

export default Books;
