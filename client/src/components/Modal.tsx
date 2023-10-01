import { createPortal } from 'react-dom';
import { ReactNode } from 'react';

type ModalProps = {
	targetClassName: string;
	handleClose: (event: React.MouseEvent) => void;
	children: ReactNode;
};

const Modal = ({ targetClassName, handleClose, children }: ModalProps) => {
	document.body.style.overflow = 'hidden';

	const close = (evt: React.MouseEvent) => {
		document.body.style.overflow = 'unset';
		handleClose(evt);
	};

	return createPortal(
		<div
			className="fixed inset-0 flex items-center justify-center bg-black/70 p-5"
			onClick={close}
		>
			{children}
		</div>,
		document.querySelector(`.${targetClassName}`) as HTMLElement
	);
};

export default Modal;
