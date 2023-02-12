import React from 'react';

import List from './List';

const Sidebar = ({ setModalActive }) => {
	return (
		<div className="wrapper">
			<div className="upper-block">
				<h2 className="upper-logo">TO-DO List</h2>
				<button className="btn upper-btn" onClick={() => setModalActive(true)}>
					Add new task
				</button>
			</div>
			<div className="task">
				<ul className="task-list">
					<List status={'all'}>All tasks</List>
					<List status={'active'}>Uncompleted tasks</List>
					<List status={'completed'}>Completed tasks</List>
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
