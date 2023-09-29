import { Project } from '../types';
import { v4 as uuid } from 'uuid';

export default [
	{
		id: uuid(),
		title: 'Morse Translator',
		description: [
			'Morse alfabesine her zaman ilgi duymuştum. Programlamanın temellerini öğrenirken aklımda her zaman Morse çevirici yazmak vardı. GO dili ile yeteri kadar tecrübem olduğunu düşündüğümde ilk küçük projem olan bu çeviriciyi yazmaya başladım.',

			"Bu proje ile GO'nun temellerini pekiştirdim ve testler yazmayı öğrendim.",
		],
		repositoryURL: 'https://github.com/LoyalEnv0y/Mors-Encode-Decode',
		imageURLs: [
			'/images/projects/Morse-1.png',
			'/images/projects/Morse-2.png',
			'/images/projects/Morse-3.png',
			'/images/projects/Morse-4.png',
		],
	},

	{
		id: uuid(),
		title: 'PingPong Score Keeper',
		description: [
			'Web tasarımı hakkında yazdığım ilk küçük projeydi. Bu proje bir ping pong oyunu içerisinde skoru takip etmeye yarıyor.',
			'HTML, CSS, Bootstrap, JS bilgilerimi geliştirmemi, DOM yapısını nasıl manüpüle edebileceğimi öğrenmemi sağladı.',
		],
		repositoryURL: 'https://github.com/LoyalEnv0y/PingPong-Score-Keeper',
		imageURLs: [
			'/images/projects/PingPong-1.png',
			'/images/projects/PingPong-2.png',
		],
	},

	{
		id: uuid(),
		title: 'Library Management System',
		description: [
			'Yeni üniversitem (İzmir Ekonomi Üniversitesi) Java dersi vereceğinden dolayı desler başlamadan yaz aylarında Java öğrenmeye karar verdim. Proje bir kütüphanenin müşterilerini ve kitaplarını yönetmesine yardım etmesi için yazıldı.',

			"Java ile ilk kez OOP (nesne tabanlı programlama)'nın ne oluğunu öğrendim ve ilk orta seviye projemi geliştirmeye başladım. Bunu yaparken henüz veritabanlarının neden ve nasıl kullanıldığını bilmediğim için tüm veri kaydetmeyi program içinde yazdım.",

			'Sistem içersinde admin/user ayrımı, ISBN kodu (barkod) kontrol etme, kitapların türleri, yazarları, kullanılabilirliği, dilleri gibi bilgilerin kayıt edilmesi, kitap kataloglarının belirli kriterlere göre sıralanması, kullanıcıların aldıkları/kiraladıkları kitapların takip edilmesi gibi özellikler mevcut.',

			"Bu proje bana neden ve nerede veri tabanı kullanmam gerektiğini, OOP kullanımının temellerini ve orta seviye OOP kavramlarını, Java'da nasıl test yazıldığını, ve versiyon kontrol programlarını (Git/Github) aktif olarak yazılım geliştirirken nasıl kullanmam gerektiğini öğretti.",

			'Başka projelere geliştirmeye başladığım için kütüphane sistemine herhangi bir GUI tasarlayamadım.',
		],
		repositoryURL: 'https://github.com/LoyalEnv0y/LibraryManagementSystem',
	},

	{
		id: uuid(),
		title: 'Algorithms and Data Structures',
		description: [
			'Programlamanın en önemli yapı taşlarından olan algoritma ve veri yapıları geliştirme hakkında daha çok bilgi toplamak istediğimden bu projeyi geliştirmeye başladım. Aslında bu bir projeden çok öğrenmek için kullandığım defter oldu.',

			'Proje ile Big O (O(x)) konseptinin nasıl ve neden kullanıldığını, arama, sıralama, ve recursion gibi algorithmaların nasıl yazıldığını, ve array, map, queue, stack, linkedlist, tree gibi veri yapılarının temellerini öğrendim.',

			'Henüz bitmeyen bu projeye zamanla graph, try, heap gibi veri yapılarını ve Depth First Search, Breath First Search, gibi algorithmaları da eklemek istiyorum.',
		],
		repositoryURL:
			'https://github.com/LoyalEnv0y/Algorithms-and-Data-Structures',
	},

	{
		id: uuid(),
		title: 'Tombala',
		description: [
			'Yine okulumuzda öğretilen dillerden biri olan C# ile pratiğimi geliştirmek için yazdığım bir projeydi.',

			"Proje, yılbaşı zamanında aile ve arkadaşlarla oynanan klasik 'Tombala' oyunu hakkında. Program oyunun kaç oyuncuyla oynanacağını, oyuncuların isimlerini, her oyuncunun kaç kart ile oynayacağını, kartların anlık durumunu, skor tablosunu, ve çekilen taşları takip etmeyi sağlıyor.",

			'Bu program ile C# ve OOP (nesne tabanlı programlama) hakkında bir çok pratik kazandım. Terminalden nasıl menü oluşturabileceğini, ve kullanıcı girdilerinin nasıl kontrol edilmesi gerektiğini öğrendim.',
		],
		repositoryURL: 'https://github.com/LoyalEnv0y/Tombala',
		imageURLs: [
			'/images/projects/Tombala-1.png',
			'/images/projects/Tombala-2.png',
			'/images/projects/Tombala-3.png',
			'/images/projects/Tombala-4.png',
			'/images/projects/Tombala-5.png',
		],
	},

	{
		id: uuid(),
		title: 'SQL Amazon Mock',
		description: [
			'Okulumda bir SQL Server projesi için geliştirmiş olduğum bir veritabanı. Online satış yapan bir sitenin ihtiyacı olabiliceğini düşündüğüm verilerin kayıt edilmesi için geliştirdim.',

			'Bu proje sayesinde SQL veri tabanlarındaki veri girişlerini ve kontrollerini, veri girişlerinde nasıl normalizasyon yapılması gerektiğini, ve şifreleren normal şekilde kayıt edilmek yerine hashlenerek kayıt edilmesi gerektiğini öğrendim.',
		],
		repositoryURL:
			'https://github.com/LoyalEnv0y/SQL-Amazon-Mock-School-Project',
		imageURLs: [
			'/images/projects/Amazon-Mock-1.png',
			'/images/projects/Amazon-Mock-2.png',
		],
	},

	{
		id: uuid(),
		title: 'Bcrypter',
		description: [
			'Bu proje hem şifreler için bir hash yöntemi olan bcrypt algroithmasını kullanmak hem de Morse alfabesi çevirmek için yaptığım bir site.',

			'Projede şu ana kadar öğrendiklerimden ziyade 3. parti kütüphanelerin nasıl kullanıldığını, ve Webpack, Vite gibi builderlara neden ihtiyacımız olduğunu öğrenmemi sağladı.',
		],
		repositoryURL: 'https://github.com/LoyalEnv0y/Bcrypter',
		imageURLs: [
			'/images/projects/Bcrypter-1.png',
			'/images/projects/Bcrypter-2.png',
			'/images/projects/Bcrypter-3.png',
			'/images/projects/Bcrypter-4.png',
		],
	},

	{
		id: uuid(),
		title: 'ParkPin',
		description: [
			'Otopark otomasyon sistemi hakkında olan bu proje, en çok zaman harcadığım proje oldu. ParkPin’i bir okul projesi için ben ve ismi Ayberk olan bir arkaşımla ortaklaşa 2-2.5 ay civarında geliştirdik. Projenin backend kısmını ve sınırlı frontend kısımlarını ben geliştirirken Ayberk frontend’in neredeyse hepsini kendi başına geliştirdi. ',

			"ParkPin'de kullanıcılar kendilerine hesap açabilir, otopark'da slot kiralayabilir, arabalarını kayıt edebilir, kullandıkları otoparklara yorum yazabilir, başkalarının yorumlarını oylayabilirler. Bunun yanı sıra kullanıcılar kendilerine ait olan bir otoparkı listeleyebilir, editleyebilir ve silebilirler.",

			'Bu proje bana backend tasarımı hakkında en çok şey öğreten proje oldu. Projede backend’de Node, Express, Mongo, Mongoose, Ejs, Passport, Joi, ve Cloudinary kullandım. Bu teknolojiler ile hiç beklemediğim kadar ilerleme kaydedip tecrübe kazandım. API nasıl yaratılır ve hazır API’lar nasıl kullanılır gibi sorularımı cevapladım.',

			'Projenin bana bir diğer getirisi ise kendi geliştirdiğim frontend kısımlarında React gibi UI tasarım kütüphanelerinin ve framework’lerin ne kadar önemli olduğunu gördüm. React bilmediğim için benzeri bir sistemi kendim yazmaya çalışıp çok zorlanmıştım. Bu projeden sonra React öğrenmeye karar verdim.',
		],
		repositoryURL: 'https://github.com/LoyalEnv0y/ParkPin',
		imageURLs: [
			'/images/projects/ParkPin-1.png',
			'/images/projects/ParkPin-2.png',
			'/images/projects/ParkPin-3.png',
			'/images/projects/ParkPin-4.png',
			'/images/projects/ParkPin-5.png',
			'/images/projects/ParkPin-6.png',
			'/images/projects/ParkPin-7.png',
			'/images/projects/ParkPin-8.png',
			'/images/projects/ParkPin-9.png',
			'/images/projects/ParkPin-10.png',
			'/images/projects/ParkPin-11.png',
			'/images/projects/ParkPin-12.png',
			'/images/projects/ParkPin-13.png',
			'/images/projects/ParkPin-14.png',
		],
	},

	{
		id: uuid(),
		title: 'VanLife',
		description: [
			'React öğrenmeye yaklaşık bir ayımı harcadıktan sonra geliştirdiğim ilk proje bu oldu.',

			'VanLife kullanıcıların kamp veya yolculuk için van kiralamalarına yardımcı olabilecek bir site. Aynı zamanda kullanıcılar kendi vanlarını kiralanması için de sunabilirler.',

			'Projeyi geliştirme amacım React-Router kütüphanesini öğrenmekti. Siteyi yaparken bunun dışında Mobil için responsive bir site nasıl geliştirilir, TailwindCSS kütüphanesi nasıl/neden kullanılır, Netlify gibi deployment servislerini kullanarak bir site nasıl internete yüklenir gibi sorularımı cevapladım.',
		],
		repositoryURL: 'https://github.com/LoyalEnv0y/ReactRouter-Basics',
		imageURLs: [
			'/images/projects/VanLife-1.png',
			'/images/projects/VanLife-2.png',
			'/images/projects/VanLife-3.png',
			'/images/projects/VanLife-4.png',
			'/images/projects/VanLife-5.png',
			'/images/projects/VanLife-6.png',
			'/images/projects/VanLife-7.png',
			'/images/projects/VanLife-8.png',
			'/images/projects/VanLife-9.png',
			'/images/projects/VanLife-10.png',
		],
	},

	{
		id: uuid(),
		title: 'Deckio',
		description: [
			"React, Redux ve React-Router öğrendikten sonra MERN stack'i (Mongo, Express.js, React, Node.js) kullanarak bir proje geliştirmek istediğim için bu projeye başladım.",

			'Deckio, kullanıcıların bilgi desteleri oluşturmalarını, editlemelerini silmelerini ve bu destelere kartlar eklemelerini sağlar.',

			"Bu projeyi yazarken Redux-Toolkit kütüphanesinin basit kullanımını, Netlify ve Render kullanarak Frontend'i ve Backend'i aynı codebase'de olan bir uygulamanın nasıl internete deploylandığını, ve MERN stack'ini kullanarak nasıl fullstack uygulamalar geliştirildiğini öğrendim.",

			'Proje maalesef henüz tamamlanmış değil çünkü sitede kullanıcı girişi kullanıcı girişi, kart editleme gibi özellikler yok.',
		],
		repositoryURL: 'https://github.com/LoyalEnv0y/MERN-Basics',
		imageURLs: [
			'/images/projects/Deckio-1.png',
			'/images/projects/Deckio-2.png',
			'/images/projects/Deckio-3.png',
			'/images/projects/Deckio-4.png',
			'/images/projects/Deckio-5.png',
		],
	},
] as Project[];
