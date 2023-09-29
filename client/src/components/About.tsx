import AboutCell from './AboutCell';
import { AboutCellContent } from '../types';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import contents from '../data/About';

const variants = {
	enter: (direction: number) => {
		return {
			x: direction > 0 ? -500 : 500,
			opacity: 0,
		};
	},

	center: {
		x: 0,
		opacity: 1,
	},

	exit: (direction: number) => {
		return {
			x: direction < 0 ? -500 : 500,
			opacity: 0,
		};
	},
};

const About = () => {
	const [isAnimating, setIsAnimating] = useState(false);
	const [[page, direction], setPage] = useState([0, 0]);

	const move = (newDirection: number) => {
		if (isAnimating) return;
		if (page <= 0 && newDirection < 0) return;
		if (page >= contents.length - 1 && newDirection > 0) return;

		setIsAnimating(true);
		setPage([page + newDirection, newDirection]);
	};

	const getNavigationSet = (content: AboutCellContent) => {
		const buttonClasses = twMerge(
			classNames('h-7 w-7 rounded-full bg-white', {
				'bg-secondary': content.index <= page,
			})
		);

		const divClasses = twMerge(
			classNames('h-0 w-7 rounded-full border-2 border-secondary', {
				'border-dashed border-white': content.index >= page,
			})
		);

		return (
			<div className="flex items-center gap-x-1" key={content.id}>
				<button
					className={buttonClasses}
					onClick={() => {
						if (isAnimating) return;
						setIsAnimating(true);
						setPage([content.index, content.index < page ? -1 : 1]);
					}}
					disabled={isAnimating}
				/>

				{content.index !== contents.length - 1 && (
					<div className={divClasses}></div>
				)}
			</div>
		);
	};

	return (
		<div className="about-card flex w-full flex-col items-center justify-between rounded-3xl border-2 border-[#ff59a9] p-4 shadow-lb shadow-[#ff7ddb40]">
			<div className="flex w-full justify-center gap-x-1">
				{contents.map((cell) => getNavigationSet(cell))}
			</div>

			<div className="flex w-full">
				<AnimatePresence mode="wait" custom={direction} initial={false}>
					<motion.div
						key={page}
						custom={direction}
						variants={variants}
						initial="enter"
						animate="center"
						exit="exit"
						transition={{
							duration: 0.4,
							type: 'spring',
							onComplete: () => setIsAnimating(false),
						}}
					>
						<AboutCell cell={contents[page]} direction={direction} />
					</motion.div>
				</AnimatePresence>
			</div>

			<div className="flex w-full">
				<div>
					<AnimatePresence>
						{page !== 0 && (
							<motion.button
								onClick={() => move(-1)}
								whileHover={{ scale: 1.5 }}
								whileTap={{ scale: 1.2, x: -4 }}
								exit={{ scale: 1, x: 0 }}
								transition={{ duration: 0.12 }}
								key={'prevButton'}
								disabled={isAnimating}
							>
								<KeyboardArrowLeftIcon />
							</motion.button>
						)}
					</AnimatePresence>
				</div>

				<div className="ml-auto">
					<AnimatePresence>
						{page !== contents.length - 1 && (
							<motion.button
								onClick={() => move(1)}
								whileHover={{ scale: 1.5 }}
								whileTap={{ scale: 1.2, x: 4 }}
								exit={{ scale: 1, x: 0 }}
								transition={{ duration: 0.12 }}
								key={'nextButton'}
								disabled={isAnimating}
							>
								<KeyboardArrowRightIcon />
							</motion.button>
						)}
					</AnimatePresence>
				</div>
			</div>
		</div>
	);
};

export default About;
