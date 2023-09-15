import AboutCell from '../components/AboutCell';
import { v4 as uuid } from 'uuid';
import { AboutCellContent } from '../types';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

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
		title: 'Programlamanı Temelleri',
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

const About = () => {
	const ref = useRef(null);
	const [test, setTest] = useState(0);

	const { scrollY } = useScroll({
		container: ref,
	});

	useMotionValueEvent(scrollY, 'change', (latest) => {
		setTest(latest);
	});

	const getNavigationClasses = (idx: number) => {
		console.log('Test => ', test);
		// console.log('Index => ', idx);
		// console.log('Test / (480) => ', test / 480);
		if (test === 480) console.log('HIT! 480 Test => ', test);
		if (test === 960) console.log('HIT! 960 Test => ', test);
		if (test === 1440) console.log('HIT! 1440 Test => ', test);
		if (test === 1920) console.log('HIT! 1920 Test => ', test);
		if (test === 2400) console.log('HIT! 2400 Test => ', test);
	};
	getNavigationClasses(0);

	return (
		<div className="my-10 flex min-h-screen flex-col items-center">
			<section className="flex justify-center py-5">
				<div className="relative h-52 w-52">
					<img
						src="/images/PP2.jpg"
						alt=""
						className="absolute w-52 animate-fade rounded-full"
					/>
					<img
						src="/images/PP1.jpg"
						alt=""
						className="absolute w-52 -rotate-[30deg] animate-fade2 rounded-full"
					/>
					<img
						src="/images/PP3.jpg"
						alt=""
						className="absolute w-52 animate-fade3 rounded-full"
					/>
					<img
						src="/images/PP4.jpg"
						alt=""
						className="absolute w-52 animate-fade4 rounded-full"
					/>
				</div>
			</section>

			<div className="flex h-[600px] w-7/12 rounded-3xl bg-[#282828]">
				<section className="h-full w-11/12 overflow-y-scroll" ref={ref}>
					{/* <AboutCell cell={AboutCellContents[1]} /> */}

					{aboutCellContents.map((cell) => (
						<AboutCell key={cell.id} cell={cell} />
					))}
				</section>

				<section className="flex w-1/12 flex-col items-center gap-y-1 self-center">
					{aboutCellContents.map((cell) => (
						<>
							{/* {getNavigationClasses(cell.index)} */}
							<a
								className="h-12 w-12 rounded-full bg-blue-300"
								href={`/#${cell.index}`}
							/>
							{cell.index !== aboutCellContents.length - 1 && (
								<div className="h-12 rounded-full border-2 border-dashed"></div>
							)}
						</>
					))}
				</section>
			</div>
		</div>
	);
};

export default About;
