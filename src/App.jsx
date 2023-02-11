import React from 'react';

import SideBar from './components/SideBar';
import Content from './components/Content';
import './sass/index.scss';

const App = () => {
	return (
		<>
			<SideBar />
			<Content />
		</>
	);
};

export default App;
