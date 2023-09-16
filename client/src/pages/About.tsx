import AboutCell from '../components/AboutCell';
import { v4 as uuid } from 'uuid';
import { AboutCellContent } from '../types';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PictureBox from '../components/PictureBox';

const aboutCellContents: AboutCellContent[] = [
	{
		id: uuid(),
		index: 0,
		title: 'Kim? Kim??',
		body: [
			'Merhaba! Ben Çetin Tekin. İzmir Ekonomi Üniversitesi’nde Bilgisayar programcılığı okuyorum. Kendimi Web Geliştirme üzerinde geliştiriyor, hergün yeni teknolojiler öğreniyor, ve öğrendiğim teknolojiler ile pratiğimi geliştiriyorum. Kendimi yazılım dünyasında mutlu hissediyorum ve proje geliştirmeye, yeni şeyler öğrenmeye bayılıyorum.',
		],
		svgLinks: ['University.svg', 'Programming.svg', 'Student.svg'],
	},

	{
		id: uuid(),
		index: 1,
		title: 'Başlangıç',
		titleSignLink: '/Origin.svg',
		body: [
			'2019’da üniversite hayatıma Ege Üniversitesi · Turizm Rehberliği · Çeşme Fakultesi’nde başladım.',
			'2020’de yüksek ortalamam sayesinde Erasmus için hibe kazanarak Porto’ya gittim.',
			'Covid-19 sırasında eve kapandığım için yeni bir hobi edinmek adına programlama öğrenmeye başladım.',
		],
		imageLinks: [
			'HS-Graduation.png',
			'Porto-Ticket.png',
			'Covid-Blur-On-Glasses.jpg',
		],
	},

	{
		id: uuid(),
		index: 2,
		title: 'Temeller',
		titleSignLink: '/Fundamentals.svg',
		body: [
			'2020 Yılında programlamaya ilk GO dilini öğrenerek başladım.',
			'Daha sonra algoritmalar ve veri yapılarını öğrenmeye başladım. LeetCode, Exercism, Hackerrank gibi sitelerde pratiğimi geliştirdim.',
			'Daha sonra API tasarımı ve Web Geliştirme öğrenmek istediğim için MySQL ve HTML, CSS, JS öğrenmeye başladım.',
		],
		imageLinks: ['GO.png', 'Grokking.jpg', 'Web-Tech.jpg'],
	},

	{
		id: uuid(),
		index: 3,
		title: 'Yeni Okul Yeni Teknolojiler',
		titleSignLink: '/New.svg',
		body: [
			'2021 Yılında Turizm Rehberliğini bırakıp, yazılımı tam zamanlı olarak öğrenmeye ve geleceğimi bunun üzerine kurmaya karar verdim.',
			'2022 Yılında İzmir Ekonomi Üniversitesi · Bilgisayar Programcılığı bölümüne girdim.',
			'Okulun ilk yılında bilmediğim teknolojiler (C#, MsSQL, Java) üzerine yoğunlaşıp bu teknolojiler ile projeler yaptım.',
			'Full-Stack Web Developer olmaya karar verdim. Bunun için sırasıyla Node.js, Express.Js, MongoDB, ve REST API tasarımı öğrenmeye başladım. Bu teknolojileri kullanarak projeler geliştirdim.',
		],
		imageLinks: [
			'Books.jpg',
			'IEU.jpg',
			'Career-At-Programming.jpg',
			'Web-Dev.jpg',
		],
	},

	{
		id: uuid(),
		index: 4,
		title: 'Günümüz',
		titleSignLink: '/Calendar.svg',
		body: [
			'Sonunda gelebildik! Yaz tatilinde  Full-Stack Web Developer olabilmek için kalan teknolojileri öğrenmeye başladım ve hala öğrenmeye devam ediyorum.',
			'React, Redux Toolkit, React Router, Tailwind gibi teknolojileri öğreniyorum ve bunların yanı sıra gelecekte de Next.js, Nest.js, Redis, Docker, Socket.io gibi teknolojileri öğrenmeye devam edeceğim.',
		],
		svgLinks: [
			'React.svg',
			'React-Router.svg',
			'Redis.svg',
			'Redux.svg',
			'Tailwind.svg',
			'Docker.svg',
			'Nextjs.svg',
			'Nestjs.svg',
			'Socketio.svg',
		],
	},
];

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
		if (page >= aboutCellContents.length - 1) return;
		setPage([page + 1, 1]);
	};

	const getNavigationSet = (cell: AboutCellContent) => {
		const buttonClasses = twMerge(
			classNames('h-12 w-12 rounded-full bg-white', {
				'bg-[#00A3FF]': cell.index <= page,
			})
		);

		const divClasses = twMerge(
			classNames('h-12 w-0 rounded-full border-2 border-[#00A3FF]', {
				'border-dashed border-white': cell.index >= page,
			})
		);

		return (
			<div className="flex flex-col items-center gap-y-1" key={cell.id}>
				<button
					className={buttonClasses}
					onClick={() => setPage([cell.index, 1])}
				/>

				{cell.index !== aboutCellContents.length - 1 && (
					<div className={divClasses}></div>
				)}
			</div>
		);
	};

	return (
		<main className="relative flex h-screen w-full flex-col items-center justify-between py-10">
			<PictureBox />

			<div className="h-10">
				<AnimatePresence>
					{page !== 0 && (
						<motion.button
							onClick={goUp}
							whileHover={{ scale: 1.5 }}
							whileTap={{ scale: 1.2, y: -10 }}
							exit={{ scale: 1, y: 0 }}
							transition={{ duration: 0.12 }}
							key={'upButton'}
						>
							<KeyboardArrowUpIcon fontSize="large" />
						</motion.button>
					)}
				</AnimatePresence>
			</div>

			<section className="flex h-full w-11/12">
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
						className="h-full w-full"
					>
						<AboutCell cell={aboutCellContents[page]} />
					</motion.div>
				</AnimatePresence>
				<section className="flex w-1/12 flex-col items-center gap-y-1 self-center">
					{aboutCellContents.map((cell) => getNavigationSet(cell))}
				</section>
			</section>

			<div className="h-10">
				<AnimatePresence>
					{page !== aboutCellContents.length - 1 && (
						<motion.button
							onClick={goDown}
							whileHover={{ scale: 1.5 }}
							whileTap={{ scale: 1.2, y: 10 }}
							exit={{ scale: 1, y: 0 }}
							transition={{ duration: 0.12 }}
							key={'downButton'}
						>
							<KeyboardArrowDownIcon fontSize="large" />
						</motion.button>
					)}
				</AnimatePresence>
			</div>
		</main>
	);
};

export default About;
