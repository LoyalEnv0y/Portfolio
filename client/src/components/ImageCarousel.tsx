import classNames from 'classnames';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { AnimatePresence, motion } from 'framer-motion';

type ImageCarouselProps = {
	imageURLs: string[];
	className?: string;
};

const ImageCarousel = ({ imageURLs, className }: ImageCarouselProps) => {
	const [[[prev, page, next], direction], setPage] = useState([
		[false, 0, imageURLs.length > 0],
		0,
	]);

	const move = (direction: number) => {
		if (page <= 0 && direction < 0) return;
		if (page >= imageURLs.length - 1 && direction > 0) return;

		const updatedPage = page + direction;
		setPage([
			[updatedPage > 0, updatedPage, updatedPage !== imageURLs.length - 1],
			direction,
		]);
	};

	const classes = twMerge(
		classNames(
			'relative flex h-36 w-full items-center justify-center',
			className
		)
	);

	return (
		<div className="flex w-full flex-col items-center">
			<div className={classes}>
				<img
					className="absolute z-30 h-5/6 border-2 border-slate-500 shadow-lb"
					src={imageURLs[page]}
				/>

				{prev && (
					<img
						className="absolute left-0 z-20 h-4/6 border-2 border-slate-500 shadow-lb"
						src={imageURLs[page - 1]}
					/>
				)}
				{next && (
					<img
						className="absolute right-0 z-10 h-4/6 border-2 border-slate-500 shadow-lb"
						src={imageURLs[page + 1]}
					/>
				)}
			</div>
			<div className="flex w-1/2 justify-between">
				<button onClick={() => move(-1)}>
					<KeyboardArrowLeftIcon />
				</button>
				<button onClick={() => move(1)}>
					<KeyboardArrowRightIcon />
				</button>
			</div>
		</div>
	);
};

export default ImageCarousel;
