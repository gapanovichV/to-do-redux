import React from 'react';
import cn from 'classnames';

import { useDispatch } from 'react-redux';
import { delTask, toggleComplete } from '../redux/todo/todoSlice';

import Modal from './Modal';
import ChangeTaskModal from '../assets/ChangeTaskModal';
import AddTaskModal from '../assets/AddTaskModal';

const Card = ({ id, title, descr, complete }) => {
	const dispatch = useDispatch();
	const [modalChange, setModalChange] = React.useState(false);

	return (
		<>
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
							className={cn('card-icon-status', { unYellow: !complete })}
						>
							{complete ? 'completed' : 'uncompleted'}
						</button>
						<button onClick={() => setModalChange(true)}>Изменить</button>
						<button onClick={() => dispatch(delTask({ id }))}>Delete</button>
					</div>
				</div>
			</div>
			<Modal active={modalChange} setActive={setModalChange}>
				<ChangeTaskModal id={id} title={title} descr={descr} />
			</Modal>
		</>
	);
};

export default Card;
