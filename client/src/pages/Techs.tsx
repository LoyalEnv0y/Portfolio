import { useState } from 'react';
import TechCard from '../components/TechCard';
import { techsData } from '../data';

const Techs = () => {
	const [techs, setTechs] = useState(techsData);

	const toggleTechCard = (id: string) => {
		setTechs(
			techs.map((tech) =>
				id === tech.id ? { ...tech, isOpen: !tech.isOpen } : tech
			)
		);
	};

	return (
		<main className="bg-[#282828] p-10">
			<div className="flex w-full items-center justify-center">
				<div className="flex h-[300px] items-center justify-center bg-[url('images/Blob-Yellow.png')] bg-contain bg-center bg-no-repeat p-10">
					<h1 className="text-center text-4xl font-semibold">
						Teknik Bilgilerim
					</h1>
				</div>
			</div>

			<div className="flex w-full items-center justify-center">
				<div className="flex h-[300px] items-center justify-center bg-[url('images/Blob-Blue.png')] bg-contain bg-center bg-no-repeat p-10">
					<h1 className="text-center text-4xl font-semibold">
						Bildiklerim
					</h1>
				</div>
			</div>

			<section className='flex flex-col gap-y-20 mb-20'>
				<div className="flex h-20 w-[317px] items-center justify-center bg-[url('images/Blob-Title.png')] bg-contain bg-center bg-no-repeat">
					<h2 className="text-2xl">Programlama Dilleri</h2>
				</div>

				<div className="flex flex-wrap justify-between gap-y-20">
					{techs.map((tech) => (
						<TechCard
							tech={tech}
							key={tech.id}
							handleClick={toggleTechCard}
						/>
					))}
				</div>
			</section>

			<div className="flex w-full items-center justify-center">
				<div className="flex h-[300px] items-center justify-center bg-[url('images/Blob-Red.png')] bg-contain bg-center bg-no-repeat p-10">
					<h1 className="mt-10 self-start text-center text-4xl font-semibold">
						Öğreneceklerim
					</h1>
				</div>
			</div>
		</main>
	);
};

export default Techs;
