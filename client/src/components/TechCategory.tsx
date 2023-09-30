import { useState } from 'react';
import TechsData from '../data/Techs';
import GradientCard from './GradientCard';

type TechCategoryProps = {
	title: string;
	category: 'langs' | 'libraries' | 'frameworks' | 'databases' | 'tools';
	known: boolean;
};

const TechCategory = ({ title, category, known }: TechCategoryProps) => {
	const techs = TechsData[category].filter((tech) => tech.learned === known);
	const [openTechIds, setOpenTechIds] = useState<string[]>([]);

	const toggleTech = (id: string) => {
		if (!openTechIds.includes(id)) {
			setOpenTechIds([...openTechIds, id]);
		} else {
			setOpenTechIds(openTechIds.filter((techId) => techId !== id));
		}
	};

	return (
		<GradientCard
			start="#37353A"
			end="#211142"
			borderColor="#933462"
			className="flex h-[15.5rem] flex-col items-center gap-y-3 px-2 py-4 shadow-lb shadow-[#6c5e8756]"
		>
			<h4 className="text-sm">{title}</h4>

			<div className="grid h-max w-full grid-cols-2 place-items-center gap-2 overflow-auto">
				{techs.map((tech) => (
					<div
						key={tech.id}
						className="group flex h-20 w-16 items-center justify-center overflow-hidden rounded-lg border-[3px] bg-white p-1"
						style={{ borderColor: tech.colorHex }}
						onClick={() => toggleTech(tech.id)}
					>
						<div className="relative h-full w-full">
							<div className="absolute flex h-full w-full items-center justify-center rounded-lg transition group-hover:-translate-y-[200%]">
								<img src={tech.logoUrl} />
							</div>

							<div className="absolute top-[200%] flex h-full w-full items-center justify-center rounded-xl transition group-hover:-translate-y-[200%]">
								<p
									className="text-center text-xs"
									style={{ color: tech.colorHex }}
								>
									{tech.title}
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</GradientCard>
	);
};

export default TechCategory;
