import React from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/todo/todoSlice';

const _addTask = () => {
	const dispatch = useDispatch();

	const [title, setTitle] = React.useState('');
	const [descr, setDescr] = React.useState('');

	const handleClickAdd = () => {
		dispatch(addTask({ title, descr }));
		setDescr('');
		setTitle('');
	};

	return (
		<>
			<h2>Добавить задачу</h2>
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

export default _addTask;
