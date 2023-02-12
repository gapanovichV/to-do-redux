import React from 'react';
import cn from 'classnames';

import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/todo/filterSlice';

const li = ({ status, children }) => {
	const dispatch = useDispatch();
	const filterBy = useSelector((state) => state.filterBy.filterState);

	const handleChangeFilter = (status) => {
		dispatch(setFilter({ status }));
	};
	return (
		<li
			onClick={() => handleChangeFilter(status)}
			label="Все"
			className={cn('task-list-li', { active: filterBy === status })}
		>
			<button className="task-list-item">{children}</button>
		</li>
	);
};

export default li;
