import React from 'react';

const _addTask = () => {
	return (
		<>
			<h2>Добавить задачу</h2>
			<div className="modal-add-title">
				Зоголовок
				<input placeholder="Зоголовок..."></input>
			</div>
			<div className="modal-add-descr">
				Описание
				<input placeholder="Описание..."></input>
			</div>
			<button className="btn modal-btn">Add task</button>
		</>
	);
};

export default _addTask;
