import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Projects = () => {
	return (
		<div className="projects-card flex w-full  flex-col items-center gap-y-10 rounded-3xl border-2 border-[#00C2FF] px-3 py-5 shadow-lb shadow-[#9affff40]">
			<h3 className="text-xl font-medium tracking-wider">ParkPin</h3>

			<section className="h-96 w-full rounded-xl bg-white p-4 text-black shadow-lb">
				<div className="h-full w-full overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#009DCE] scrollbar-thumb-rounded">
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit.
						Accusantium excepturi, quaerat earum dicta sit nostrum ipsam
						enim fugiat in, asperiores ducimus libero saepe voluptatem
						dolorem? Illum quisquam adipisci magnam laudantium.
						Quibusdam doloribus, inventore unde eos culpa sequi beatae
						voluptate hic delectus nihil, blanditiis iste ducimus
						aspernatur labore in at dolores animi enim et. Deleniti
						nulla debitis repellendus officia repellat aspernatur?
					</p>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit.
						Accusantium excepturi, quaerat earum dicta sit nostrum ipsam
						enim fugiat in, asperiores ducimus libero saepe voluptatem
						dolorem? Illum quisquam adipisci magnam laudantium.
						Quibusdam doloribus, inventore unde eos culpa sequi beatae
						voluptate hic delectus nihil, blanditiis iste ducimus
						aspernatur labore in at dolores animi enim et. Deleniti
						nulla debitis repellendus officia repellat aspernatur?
					</p>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit.
						Accusantium excepturi, quaerat earum dicta sit nostrum ipsam
						enim fugiat in, asperiores ducimus libero saepe voluptatem
						dolorem? Illum quisquam adipisci magnam laudantium.
						Quibusdam doloribus, inventore unde eos culpa sequi beatae
						voluptate hic delectus nihil, blanditiis iste ducimus
						aspernatur labore in at dolores animi enim et. Deleniti
						nulla debitis repellendus officia repellat aspernatur?
					</p>
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

				<div className="relative w-full h-36 flex items-center justify-center">
					<img
						className="absolute h-5/6 z-30 border-2 border-slate-500"
						src="images/projects/ParkPin-1.png"
					/>
					<img
						className="absolute h-4/6 left-0 z-20 border-2 border-slate-500"
						src="images/projects/ParkPin-2.png"
					/>
					<img
						className="absolute h-4/6 right-0 z-10 border-2 border-slate-500"
						src="images/projects/ParkPin-3.png"
					/>
				</div>

				<div className="flex w-1/2 justify-between">
					<button>
						<KeyboardArrowLeftIcon />
					</button>
					<button>
						<KeyboardArrowRightIcon />
					</button>
				</div>
			</section>
		</div>
	);
};

export default Projects;
