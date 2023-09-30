import { motion } from 'framer-motion';
import { Project } from '../types';
import ImageCarousel from './ImageCarousel';
import parse from 'html-react-parser';

type ProjectCellProps = {
	project: Project;
	direction: number;
};

const ProjectCell = ({ project, direction }: ProjectCellProps) => {
	const container = {
		start: {},
		end: {
			transition: {
				staggerChildren: 0.3,
			},
		},
	};

	const item = {
		start: { opacity: 0, x: direction > 0 ? 1000 : -1000 },
		end: { opacity: 1, x: 0 },
	};

	return (
		<motion.div
			className="flex h-full w-full flex-col items-center gap-y-7 px-3"
			variants={container}
			initial="start"
			animate="end"
		>
			<h3 className="text-center text-xl font-medium tracking-wider">
				{project.title}
			</h3>

			<motion.section
				variants={item}
				className="w-full rounded-xl bg-white p-4 text-black shadow-lb"
			>
				<div className="flex h-full max-h-96 w-full flex-col gap-y-4 overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#009DCE] scrollbar-thumb-rounded">
					{project.description.map((paragraph, i) => {
						const parsed = parse(paragraph);
						return <p key={i}>{parsed}</p>;
					})}
				</div>
			</motion.section>

			<motion.section
				variants={item}
				className="flex w-full flex-col items-center gap-5"
			>
				<div className="flex w-full justify-between">
					<button className="flex h-16 w-16 flex-col items-center justify-evenly rounded-2xl border-2 border-slate-300 bg-white shadow-lb">
						<img src="/assets/Web.svg" className="h-5 w-5" />
						<p className="text-xs text-black">Website</p>
					</button>

					<a href={project.repositoryURL} target="_blank">
						<button className="flex h-16 w-16 flex-col items-center justify-evenly rounded-2xl border-2 border-slate-300 bg-white shadow-lb">
							<img src="/assets/Codebase.svg" className="h-5 w-5" />
							<p className="text-xs text-black">Codebase</p>
						</button>
					</a>

					<button className="flex h-16 w-16 flex-col items-center justify-evenly rounded-2xl border-2 border-slate-300 bg-white shadow-lb">
						<img src="/assets/Video.svg" className="h-5 w-5" />
						<p className="text-xs text-black">Video</p>
					</button>
				</div>
			</motion.section>

			<motion.section
				variants={item}
				className="flex w-full flex-col items-center gap-2"
			>
				{project.imageURLs && (
					<ImageCarousel imageURLs={project.imageURLs} />
				)}
			</motion.section>
		</motion.div>
	);
};

export default ProjectCell;
