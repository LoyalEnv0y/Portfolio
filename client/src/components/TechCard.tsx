import { Tech } from '../types';

type TechCardProps = {
	tech: Tech;
	handleClick: (id: string) => void;
};

const TechCard = ({ tech, handleClick }: TechCardProps) => {
	const height = !tech.isOpen && 'h-[200px]';

	const getRingFulness = () => {
		return 470 - 21.6 * (tech.knowledgePercent / 10);
	};

	return (
		<div
			className={`w-[400px] rounded-[4rem] ${height}`}
		>
			<header
				className="bg-[${tech.colorHex}] flex h-28 w-full items-center justify-evenly rounded-t-[4rem] cursor-pointer"
				style={{ backgroundColor: tech.colorHex }}
				onClick={() => handleClick(tech.id)}
			>
				<h3 className="text-3xl font-semibold">{tech.title}</h3>
				<div className="flex h-20 w-20 items-center justify-center rounded-full bg-white">
					<img src={tech.logoUrl} className="h-14 w-14" />
				</div>
			</header>

			{tech.isOpen && (
				<main className="h-[650px] p-4 bg-white">
					<p className="h-[20%] text-black text-sm">{tech.description}</p>

					<div className="flex justify-evenly rounded-t-xl border-b-2 bg-[#282828] p-1 text-white">
						<a href="">Projeler</a>
						<a href="">Sertifikalar</a>
					</div>

					<div className="h-[74%] w-full rounded-b-xl bg-[#282828]"></div>
				</main>
			)}

			<footer
				className="flex h-28 w-full items-center justify-evenly rounded-b-[4rem]"
				style={{ backgroundColor: tech.colorHex }}
			>
				<h3 className="text-3xl font-semibold">Yeterlilik</h3>
				<div className="relative h-20 w-20 rounded-full bg-white p-[10px]">
					<div
						className="flex h-[60px] w-[60px] items-center justify-center rounded-full"
						style={{ backgroundColor: tech.colorHex }}
					>
						<p className="text-white">{tech.knowledgePercent}%</p>
					</div>

					<svg
						xmlns="http://www.w3.org/2000/svg"
						version="1.1"
						className="absolute left-0 top-0 h-20 w-20 fill-none stroke-[#eade00] stroke-[10px]"
						strokeDasharray={471}
						strokeDashoffset={getRingFulness()}
					>
						<circle cx="40" cy="40" r="35" strokeLinecap="round" />
					</svg>
				</div>
			</footer>
		</div>
	);
};

export default TechCard;
