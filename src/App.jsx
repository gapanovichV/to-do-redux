import React from 'react';

import SideBar from './components/SideBar';
import Content from './components/Content';
import './sass/index.scss';
import Modal from './components/Modal';
import _addTask from './components/_addTask';

const App = () => {
	const [modalActive, setModalActive] = React.useState(false);
	console.log(modalActive);
	return (
		<>
			<SideBar setModalActive={setModalActive} />
			<Content setModalActive={setModalActive} />
			<Modal active={modalActive} setActive={setModalActive}>
				<_addTask />
			</Modal>
		</>
	);
};

export default App;
