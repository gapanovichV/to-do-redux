import React from 'react';
import cn from 'classnames';

function Modal({ active, setActive, children }) {
	return (
		<div className={cn('modal', { active: active })} onClick={() => setActive(false)}>
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				{children}
			</div>
		</div>
	);
}

export default Modal;
