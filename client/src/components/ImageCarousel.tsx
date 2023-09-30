import classNames from 'classnames';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CloseIcon from '@mui/icons-material/Close';
import { AnimatePresence, motion } from 'framer-motion';
import Modal from './Modal';

type ImageCarouselProps = {
	imageURLs: string[];
	className?: string;
};

const variants = {
	enter: (direction: number) => {
		return {
			x: direction > 0 ? 100 : -100,
			scale: 0.79,
			opacity: 0,
		};
	},

	center: {
		x: 0,
		scale: 1,
		opacity: 1,
	},

	exit: (direction: number) => {
		return {
			x: direction > 0 ? -100 : 100,
			scale: 0.79,
			opacity: 0,
		};
	},
};

const ImageCarousel = ({ imageURLs, className }: ImageCarouselProps) => {
	const [isAnimating, setIsAnimating] = useState(false);
	const [[page, direction], setPage] = useState([0, 0]);
	const move = (newDirection: number) => {
		if (isAnimating) return;
		if (page <= 0 && newDirection < 0) return;
		if (page >= imageURLs.length - 1 && newDirection > 0) return;

		setIsAnimating(true);
		setPage([page + newDirection, newDirection]);
	};

	const [isModalOpen, setIsModalOpen] = useState<boolean>();
	const modal = (
		<Modal
			targetClassName="project-image-modal"
			handleClose={() => setIsModalOpen(false)}
		>
			<div className='flex flex-col items-center gap-y-2'>
				<button className='text-white self-end'>
					<CloseIcon fontSize='large' />
				</button>
				<div className="flex h-full w-full flex-col items-center justify-center">
					<img src={imageURLs[page]} />
				</div>
			</div>
		</Modal>
	);

	const classes = twMerge(
		classNames('flex h-36 w-full items-center justify-center', className)
	);

	const getImageClasses = () => {
		return twMerge(classNames('h-full shadow-lb'));
	};

	return (
		<div className="flex w-full flex-col items-center gap-y-2">
			{isModalOpen && modal}

			<div className={classes}>
				<AnimatePresence mode="wait" custom={direction} initial={false}>
					<motion.img
						variants={variants}
						custom={direction}
						initial="enter"
						animate="center"
						exit="exit"
						transition={{
							duration: 0.2,
							type: 'spring',
							bounce: 0.4,
							onComplete: () => setIsAnimating(false),
						}}
						key={imageURLs[page]}
						src={imageURLs[page]}
						className={getImageClasses()}
						onClick={() => setIsModalOpen(true)}
					/>
				</AnimatePresence>
			</div>
			<div className="flex w-3/4">
				<div className="flex w-1/2 justify-center">
					{page !== 0 && (
						<button onClick={() => move(-1)} disabled={isAnimating}>
							<KeyboardArrowLeftIcon />
						</button>
					)}
				</div>
				<div className="flex w-1/2 justify-center">
					{page !== imageURLs.length - 1 && (
						<button onClick={() => move(1)} disabled={isAnimating}>
							<KeyboardArrowRightIcon />
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default ImageCarousel;
