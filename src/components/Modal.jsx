import React from 'react';

function Modal({ active, setActive }) {
	return (
		<div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				<h2>Добавить задачу</h2>
				<div className="modal-add-title">
					Зоголовок
					<input placeholder='Зоголовок...'></input>
				</div>
				<div className="modal-add-descr">
					Описание
					<input placeholder='Описание...'></input>
				</div>
				<button className="btn modal-btn">Add task</button>
			</div>
		</div>
	);
}

export default Modal;
