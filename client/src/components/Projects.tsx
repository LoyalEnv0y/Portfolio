import projectsData from '../data/Projects';
import ImageCarousel from './imageCarousel';

const Projects = () => {
	const project = projectsData[7];

	return (
		<div className="projects-card flex w-full flex-col items-center gap-y-10 rounded-3xl border-2 border-[#00C2FF] px-3 py-5 shadow-lb shadow-[#9affff40]">
			<h3 className="text-xl font-medium tracking-wider">{project.title}</h3>

			<section className="h-96 w-full rounded-xl bg-white p-4 text-black shadow-lb">
				<div className="flex h-full w-full flex-col gap-y-4 overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#009DCE] scrollbar-thumb-rounded">
					{project.description.map((paragraph, i) => (
						<p key={i}>{paragraph}</p>
					))}
				</div>
			</section>

			<section className="flex w-full flex-col items-center gap-5">
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
			</section>

			<section className="flex w-full flex-col items-center gap-2">
				<h3 className="text-lg font-medium tracking-wider">Görüntüler</h3>

				{project.imageURLs && (
					<ImageCarousel imageURLs={project.imageURLs} />
				)}
			</section>
		</div>
	);
};

export default Projects;
