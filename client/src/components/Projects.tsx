import { useState } from 'react';
import projectsData from '../data/Projects';
import ProjectCell from './Project';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { AnimatePresence, motion } from 'framer-motion';

const variants = {
	enter: (direction: number) => {
		return {
			x: direction > 0 ? 1000 : -1000,
			opacity: 0,
		};
	},

	center: {
		x: 0,
		opacity: 1,
	},

	exit: (direction: number) => {
		return {
			x: direction > 0 ? -1000 : 1000,
			opacity: 0,
		};
	},
};
const Projects = () => {
	const [isAnimating, setIsAnimating] = useState(false);
	const [[page, direction], setPage] = useState([0, 0]);
	const move = (newDirection: number) => {
		if (isAnimating) return;
		if (page <= 0 && newDirection < 0) return;
		if (page >= projectsData.length - 1 && newDirection > 0) return;

		setIsAnimating(true);
		setPage([page + newDirection, newDirection]);
	};

	const currProject = projectsData[page];

	return (
		<div className="projects-card rounded-3xl border-2 border-[#00C2FF] shadow-lb shadow-[#9affff40]">
			<AnimatePresence mode="wait" custom={direction} initial={false}>
				<motion.div
					variants={variants}
					custom={direction}
					initial="enter"
					animate="center"
					exit="exit"
					transition={{
						duration: 0.3,
						onComplete: () => setIsAnimating(false),
					}}
					key={currProject.id}
					className="flex h-full w-full flex-col items-center gap-y-10 px-3 py-5"
				>
					{
						<ProjectCell
							project={currProject}
							key={currProject.id}
							direction={direction}
						/>
					}
				</motion.div>
			</AnimatePresence>

			<div className="mx-auto my-5 flex w-11/12">
				<div className="flex w-1/2 justify-start">
					{page > 0 && (
						<button onClick={() => move(-1)} disabled={isAnimating}>
							<KeyboardArrowLeftIcon fontSize="large" />
						</button>
					)}
				</div>
				<div className="flex w-1/2 justify-end">
					{page < projectsData.length - 1 && (
						<button onClick={() => move(1)} disabled={isAnimating}>
							<KeyboardArrowRightIcon fontSize="large" />
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default Projects;
