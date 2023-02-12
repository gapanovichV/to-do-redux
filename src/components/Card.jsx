import React from 'react';
import cn from 'classnames';

import { useDispatch } from 'react-redux';
import { delTask, toggleComplete } from '../redux/todo/todoSlice';

const Card = ({ id, title, descr, complete }) => {
	const dispatch = useDispatch();

	return (
		<div className="card">
			<div className="card-text">
				<h4 className="card-text-title">{title}</h4>
				<p className="card-text-descr">{descr}</p>
			</div>
			<div className="card-under">
				<div className="card-date">
					02/02/2023
					<hr />
				</div>
				<div className="card-icon">
					<button
						onClick={() => dispatch(toggleComplete({ id }))}
						className={cn('card-icon-status', { unyellow: !complete })}
					>
						{complete ? 'completed' : 'uncompleted'}
					</button>
					<button onClick={() => dispatch(delTask({ id }))}>Delete</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
