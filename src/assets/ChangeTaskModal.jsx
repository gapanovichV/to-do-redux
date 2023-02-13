import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { changeTask } from '../redux/todo/todoSlice';

const ChangeTaskModal = ({ id }) => {
	const dispatch = useDispatch();
	const [title, setTitle] = React.useState('');
	const [descr, setDescr] = React.useState('');

	const handleClickAdd = () => {
		dispatch(changeTask({ id, title, descr }));
		setDescr('');
		setTitle('');
	};

	return (
		<>
			<h2>Изменить задача</h2>
			<div className="modal-add-title">
				Заголовок
				<input
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					placeholder="Заголовок..."
				></input>
			</div>
			<div className="modal-add-descr">
				Описание
				<input
					value={descr}
					onChange={(e) => setDescr(e.target.value)}
					placeholder="Описание..."
				></input>
			</div>
			<button onClick={handleClickAdd} className="btn modal-btn">
				Add task
			</button>
		</>
	);
};

export default ChangeTaskModal;
