import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Card from './Card';

const Content = ({ setModalActive }) => {
	const options = { year: 'numeric', month: 'short', day: 'numeric' };
	const dateNow = new Date().toLocaleDateString('en-US', options);

	const { todo, filterBy } = useSelector((state) => state);

	return (
		<div className="content">
			<div className="upper-content">
				<div className="upper-content-date">{dateNow}</div>
				<button className="btn upper-content-btn" onClick={() => setModalActive(true)}>
					Add new task
				</button>
			</div>
			<h2 className="content-title">All tasks</h2>
			<div className="content-card">
				{todo.data
					.filter((obj) => {
						if (filterBy.filterState === 'all') {
							return true;
						}
						if (filterBy.filterState === 'completed') {
							return obj.complete;
						}
						if (filterBy.filterState === 'active') {
							return !obj.complete;
						}
					})
					.map(
						(obj) => (
							(
								<Card
									key={obj.id}
									id={obj.id}
									title={obj.title}
									descr={obj.descr}
									complete={obj.complete}
								/>
							)
						),
					)}
			</div>
		</div>
	);
};

export default Content;
