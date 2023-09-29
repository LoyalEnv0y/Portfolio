import { motion } from 'framer-motion';
import { Project } from '../types';
import ImageCarousel from './ImageCarousel';

type ProjectProps = {
	project: Project;
	direction: number;
};

const ProjectCell = ({ project, direction }: ProjectProps) => {
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
			className="flex h-full w-full flex-col items-center gap-y-10 px-3"
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
				<div className="flex max-h-96 h-full w-full flex-col gap-y-4 overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#009DCE] scrollbar-thumb-rounded">
					{project.description.map((paragraph, i) => (
						<p key={i}>{paragraph}</p>
					))}
				</div>
			</motion.section>

			<motion.section
				variants={item}
				className="flex w-full flex-col items-center gap-5"
			>
				<h3 className="text-lg font-medium tracking-wider">İncele</h3>

				<div className="flex w-full justify-between">
					<button className="flex h-20 w-20 flex-col items-center justify-evenly rounded-2xl bg-white shadow-lb">
						<img src="/assets/Web.svg" className="h-10 w-10" />
						<p className="text-black">Website</p>
					</button>
					<button className="flex h-20 w-20 flex-col items-center justify-evenly rounded-2xl bg-white shadow-lb">
						<img src="/assets/Codebase.svg" className="h-10 w-10" />
						<p className="text-black">Codebase</p>
					</button>
					<button className="flex h-20 w-20 flex-col items-center justify-evenly rounded-2xl bg-white shadow-lb">
						<img src="/assets/Video.svg" className="h-10 w-10" />
						<p className="text-black">Video</p>
					</button>
				</div>
			</motion.section>

			<motion.section
				variants={item}
				className="flex w-full flex-col items-center gap-2"
			>
				{project.imageURLs && (
					<>
						<h3 className="text-lg font-medium tracking-wider">
							Görüntüler
						</h3>

						<ImageCarousel imageURLs={project.imageURLs} />
					</>
				)}
			</motion.section>
		</motion.div>
	);
};

export default ProjectCell;
