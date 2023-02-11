import React from 'react';

const Card = () => {
	return (
		<div className="card">
			<div className="card-text">
				<h4 className="card-text-title">Task 4</h4>
				<p className="card-text-descr">
        This is the description for this tas
        </p>
			</div>
			<div className="card-under">
				<div className="card-date">
					02/02/2023
					<hr />
				</div>
				<div className="card-icon">
					<div className="card-icon-status">{true ? 'completed' : 'uncompleted'}</div>
					<a href="/">Delete</a>
				</div>
			</div>
		</div>
	);
};

export default Card;
