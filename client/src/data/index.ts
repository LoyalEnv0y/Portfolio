import { Tech } from '../types';
import { v4 as uuid } from 'uuid';

export const techsData: Tech[] = [
	{
		id: uuid(),
		title: 'HTML',
		logoUrl: '/assets/HTML.svg',
		description:
			'Web geliştirmenin temeli olan HTML’i 2020 yılında öğrenmeye başladım. 2020’den beri geliştirdiğim projelerin neredeyse hepsinde kullanıyorum.',
		knowledgePercent: 80,
		isOpen: false,
		colorHex: '#E44D26',
	},
	{
		id: uuid(),
		title: 'CSS',
		logoUrl: '/assets/CSS.svg',
		description:
			'Hazırladığım sitelere stiller verebilmek için HTML ile beraber CSS öğrenmeye başladım. Artık kendi başına CSS kullanmak yerine Tailwind kullansam da hala CSS hakkında yeni şeyler öğreniyorum.',
		knowledgePercent: 50,
		isOpen: false,
		colorHex: '#1572B6',
	},
	{
		id: uuid(), 
		title: 'JavaScript',
		logoUrl: '/assets/JS.svg',
		description:
			'HTML ve CSS den sonra web geliştirmenin temellerini öğrenmek için başladığım 3. teknolojiydir. Şu ana kadar en çok zaman harcadığım teknoloji olmakla beraber kendimi yazarken en güçlü hissettiğim dildir.',
		knowledgePercent: 80,
		isOpen: false,
		colorHex: '#E9CA32',
	},
	{
		id: uuid(),
		title: 'GO',
		logoUrl: '/assets/GO.svg',
		description:
			'2020 Yılında programlama hayatıma ilk GO dili ile başladım. Low level bir programlama dili olması sebebi ile bir çok algoritmayı ve veri yapılarını GO ile öğrendim.',
		knowledgePercent: 30,
		isOpen: false,
		colorHex: '#00ACD7',
	},
	{
		id: uuid(),
		title: 'JAVA',
		logoUrl: '/assets/JAVA.svg',
		description:
			'Java’dan her zaman korkmama rağmen üniversitemde kullanıldığını bildiğim için dersler başlamadan önce kendim öğrenmeye başladım. OOP (nesne tabanlı programlama) ve disayn paternlerini Java ile öğrendim.',
		knowledgePercent: 60,
		isOpen: false,
		colorHex: '#E76F00',
	},
	{
		id: uuid(),
		title: 'C#',
		logoUrl: '/assets/C#.svg',
		description:
			'Yine Üniversitede gösterilen teknolojilerden biri olduğu için derslerden önce boş zamanımda çalışarak öğrendiğim bir diğer dil olan c# ile OOP bilgimi geliştirdim ve Windows Formları ile arayüz oluşturmayı öğrendim.',
		knowledgePercent: 50,
		isOpen: false,
		colorHex: '#390091',
	},
	{
		id: uuid(),
		title: 'TypeScript',
		logoUrl: '/assets/TS.svg',
		description:
			'Uzun bir zaman önce JavaScript ile fullstack uygulamalar geliştirdikten sonra TypeScript kullanmaya başlamaya karar verdim. Veri tiplerini kullanarak JavaScript yazma fikri çok hoşuma gittiği için bir daha JavaScript’e geri dönmedim.',
		knowledgePercent: 50,
		isOpen: false,
		colorHex: '#007ACC',
	},
	{
		id: uuid(),
		title: 'Nodejs',
		logoUrl: '/assets/Nodejs.svg',
		description:
			'2022 yılında Frontend’in yanı sıra backend öğrenme isteğimden dolayı Nodejs öğrenmeye başladım. Nodejs ile express mongoose gibi kütüphaneleri kullanarak RESTFUL API yazmayı öğrendim.',
		knowledgePercent: 70,
		isOpen: false,
		colorHex: '#3FAE2A',
	},
];
