import React from 'react';

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
					<li className="task-list-li active">
						<a className="task-list-item" href="/">
							All tasks
						</a>
					</li>
					<li className="task-list-li">
						<a className="task-list-item" href="/">
							Uncompleted tasks
						</a>
					</li>
					<li className="task-list-li">
						<a className="task-list-item" href="/">
							Tasks done
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
