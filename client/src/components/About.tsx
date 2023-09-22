import AboutCell from './AboutCell';
import { AboutCellContent } from '../types';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import contents from '../data/About';

const variants = {
	enter: (direction: number) => {
		return {
			y: direction > 0 ? 1000 : -1000,
			opacity: 0,
		};
	},

	center: {
		y: 0,
		opacity: 1,
	},

	exit: (direction: number) => {
		return {
			y: direction < 0 ? 1000 : -1000,
			opacity: 0,
		};
	},
};

const About = () => {
	const [[page, direction], setPage] = useState([0, 0]);

	const goUp = () => {
		if (page < 1) return;
		setPage([page - 1, -1]);
	};

	const goDown = () => {
		if (page >= contents.length - 1) return;
		setPage([page + 1, 1]);
	};

	const getNavigationSet = (cell: AboutCellContent) => {
		const buttonClasses = twMerge(
			classNames('h-12 w-12 rounded-full bg-white', {
				'bg-secondary': cell.index <= page,
			})
		);

		const divClasses = twMerge(
			classNames('h-12 w-0 rounded-full border-2 border-secondary', {
				'border-dashed border-white': cell.index >= page,
			})
		);

		return (
			<div className="flex flex-col items-center gap-y-1" key={cell.id}>
				<button
					className={buttonClasses}
					onClick={() => setPage([cell.index, 1])}
				/>

				{cell.index !== contents.length - 1 && (
					<div className={divClasses}></div>
				)}
			</div>
		);
	};

	return (
		<div className="bg-primary flex h-[700px] w-full flex-col items-center justify-between rounded-3xl py-4 text-black">
			<AnimatePresence>
				{page !== 0 && (
					<motion.button
						onClick={goUp}
						whileHover={{ scale: 1.5 }}
						whileTap={{ scale: 1.2, y: -4 }}
						exit={{ scale: 1, y: 0 }}
						transition={{ duration: 0.12 }}
						key={'upButton'}
					>
						<KeyboardArrowUpIcon fontSize="large" />
					</motion.button>
				)}
			</AnimatePresence>

			<section className="flex h-full">
				<AnimatePresence
					mode="popLayout"
					custom={direction}
					initial={false}
				>
					<motion.div
						key={page}
						custom={direction}
						variants={variants}
						initial="enter"
						animate="center"
						exit="exit"
						transition={{
							duration: 0.4,
						}}
						className="h-full w-11/12"
					>
						<AboutCell cell={contents[page]} />
					</motion.div>
				</AnimatePresence>

				<section className="flex w-1/12 flex-col items-center gap-y-1 self-center">
					{contents.map((cell) => getNavigationSet(cell))}
				</section>
			</section>

			<AnimatePresence>
				{page !== contents.length - 1 && (
					<motion.button
						onClick={goDown}
						whileHover={{ scale: 1.5 }}
						whileTap={{ scale: 1.2, y: 4 }}
						exit={{ scale: 1, y: 0 }}
						transition={{ duration: 0.12 }}
						key={'downButton'}
					>
						<KeyboardArrowDownIcon fontSize="large" />
					</motion.button>
				)}
			</AnimatePresence>
		</div>
	);
};

export default About;
