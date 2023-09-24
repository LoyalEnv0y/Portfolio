import AboutCell from './AboutCell';
import { AboutCellContent } from '../types';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';

// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
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
	const [[page, direction], setPage] = useState([0, 0]);

	const goPrev = () => {
		if (page < 1) return;
		setPage([page - 1, -1]);
	};

	const goNext = () => {
		if (page >= contents.length - 1) return;
		setPage([page + 1, 1]);
	};

	const getNavigationSet = (cell: AboutCellContent) => {
		const buttonClasses = twMerge(
			classNames('h-7 w-7 rounded-full bg-white', {
				'bg-secondary': cell.index <= page,
			})
		);

		const divClasses = twMerge(
			classNames('h-0 w-7 rounded-full border-2 border-secondary', {
				'border-dashed border-white': cell.index >= page,
			})
		);

		return (
			<div className="flex items-center gap-x-1" key={cell.id}>
				<button
					className={buttonClasses}
					onClick={() =>
						setPage([cell.index, cell.index < page ? -1 : 1])
					}
				/>

				{cell.index !== contents.length - 1 && (
					<div className={divClasses}></div>
				)}
			</div>
		);
	};

	return (
		<div className="about-card flex w-full flex-col items-center justify-between rounded-3xl p-4">
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
								onClick={goPrev}
								whileHover={{ scale: 1.5 }}
								whileTap={{ scale: 1.2, x: -4 }}
								exit={{ scale: 1, x: 0 }}
								transition={{ duration: 0.12 }}
								key={'prevButton'}
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
								onClick={goNext}
								whileHover={{ scale: 1.5 }}
								whileTap={{ scale: 1.2, x: 4 }}
								exit={{ scale: 1, x: 0 }}
								transition={{ duration: 0.12 }}
								key={'nextButton'}
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
