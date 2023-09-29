import { createPortal } from 'react-dom';
import { ReactNode } from 'react';

type ModalProps = {
	targetClassName: string;
	handleClose: () => void;
	children: ReactNode;
};

const Modal = ({ targetClassName, handleClose, children }: ModalProps) => {
	return createPortal(
		<div
			className="fixed inset-0 flex items-center justify-center bg-black/70 p-5"
			onClick={handleClose}
		>
			{children}
		</div>,
		document.querySelector(`.${targetClassName}`) as HTMLElement
	);
};

export default Modal;
