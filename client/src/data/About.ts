import { v4 as uuid } from 'uuid';
import { AboutCellContent } from '../types';

export default [
	{
		id: uuid(),
		index: 0,
		title: 'Kim? Kim??',
		titleSignLink: 'Who.svg',
		body: [
			'Merhaba! Ben Çetin Tekin. İzmir Ekonomi Üniversitesi’nde Bilgisayar programcılığı okuyorum. Kendimi Web Geliştirme üzerinde geliştiriyor, her gün yeni teknolojiler öğreniyor, ve öğrendiğim teknolojiler ile pratiğimi geliştiriyorum. Kendimi yazılım dünyasında mutlu hissediyorum ve proje geliştirmeye, yeni şeyler öğrenmeye bayılıyorum.',
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
		imageLinks: ['GO.png', 'Grokking.jpg', 'SimpleSite.png'],
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
		imageLinks: ['Books.jpg', 'IEU.jpg', 'Projects.png', 'Web-Dev.jpg'],
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
			'Redux.svg',
			'React-Router.svg',
			'Tailwind.svg',
			'Nextjs-Dark.svg',
			'Nestjs.svg',
			'Redis.svg',
			'Docker.svg',
			'Socketio-Dark.svg',
		],
	},
] as AboutCellContent[];
