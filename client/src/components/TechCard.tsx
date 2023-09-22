import { twMerge } from 'tailwind-merge';
import { Tech } from '../types';
import classNames from 'classnames';

type TechCardProps = {
	tech: Tech;
	handleClick: (id: string) => void;
};

const TechCard = ({ tech, handleClick }: TechCardProps) => {
	const height = !tech.isOpen && 'h-[200px]';

	const getRingFulness = () => {
		return 470 - 21.6 * (tech.knowledgePercent / 10);
	};

	function hexToRgb(hex: string): string {
		const hexCode = hex.slice(1);

		const bigint = parseInt(hexCode, 16);
		const r = (bigint >> 16) & 255;
		const g = (bigint >> 8) & 255;
		const b = bigint & 255;

		return r + ',' + g + ',' + b;
	}

	function rgbToHex(r: number, g: number, b: number) {
		return '#' + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
	}

	const darken = () => {
		const rgb = hexToRgb(tech.colorHex).split(',');
		let [r, g, b] = rgb.map((i) => parseInt(i));

		r = r < 1 ? 0 : r - r * 0.19;
		g = g < 1 ? 0 : g - g * 0.19;
		b = b < 1 ? 0 : b - b * 0.19;

		return rgbToHex(r, g, b);
	};

	const getHeaderClasses = () => {
		return twMerge(
			classNames(
				`flex h-28 w-full cursor-pointer select-none items-center justify-evenly rounded-t-[4rem] hover:bg-[${darken()}]`
			)
		);
	};

	return (
		<div className={`w-[400px] rounded-[4rem] ${height}`}>
			<header
				className={getHeaderClasses()}
				style={{ backgroundColor: tech.colorHex }}
				onClick={() => handleClick(tech.id)}
			>
				<h3 className="text-3xl font-semibold">{tech.title}</h3>
				<div className="flex h-20 w-20 items-center justify-center rounded-full bg-white">
					<img src={tech.logoUrl} className="h-14 w-14" />
				</div>
			</header>

			{tech.isOpen ? (
				<main className="h-[650px] bg-white p-4">
					<p className="h-[20%] text-sm text-black">{tech.description}</p>

					<div className="flex justify-evenly rounded-t-xl border-b-2 bg-[#282828] p-1 text-white">
						<a href="">Projeler</a>
						<a href="">Sertifikalar</a>
					</div>

					<div className="h-[74%] w-full rounded-b-xl bg-[#282828]"></div>
				</main>
			) : (
				<div className="h-1 w-full bg-white"></div>
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
