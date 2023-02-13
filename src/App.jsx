import React from 'react';

import SideBar from './components/SideBar';
import Content from './components/Content';
import Modal from './components/Modal';
import AddTaskModal from './assets/AddTaskModal';

import './sass/index.scss';

const App = () => {
	const [modalActive, setModalActive] = React.useState(false);

	return (
		<>
			<SideBar setModalActive={setModalActive} />
			<Content setModalActive={setModalActive} />
			<Modal active={modalActive} setActive={setModalActive}>
				<AddTaskModal/>
			</Modal>
		</>
	);
};

export default App;
