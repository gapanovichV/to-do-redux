import React from 'react';

import Card from './Card';
const Content = () => {
	const options = { year: 'numeric', month: 'short', day: 'numeric' };
	const date = new Date().toLocaleDateString('en-US', options);
	return (
		<div className="content">
			<div className="upper-content">
				<div className="upper-content-date">{date}</div>
				<button className="btn upper-content-btn">Add new task</button>
			</div>
			<h2 className="content-title">All tasks</h2>
			<div className="content-card">
				<Card />
				<Card />
				<Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
			</div>
		</div>
	);
};

export default Content;
