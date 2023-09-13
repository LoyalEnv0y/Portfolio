import NavBar from '../components/NavBar';
import MainPageHeader from '../components/mainPage/Header';

const MainPage = () => {
	return (
		<div className="font-poppins">
			<MainPageHeader />

			<NavBar />

			<main className="h-screen w-full bg-[#111928] p-10 text-white">
				<section className="relative flex">
					<img
						src="/images/PP2.jpg"
						alt=""
						className="absolute w-52 animate-fade rounded-full"
					/>
					<img
						src="/images/PP1.jpg"
						alt=""
						className="animate-fade2 absolute w-52 -rotate-[30deg] rounded-full"
					/>
					<img
						src="/images/PP3.jpg"
						alt=""
						className="animate-fade3 absolute w-52 rounded-full"
					/>
					<img
						src="/images/PP4.jpg"
						alt=""
						className="animate-fade4 absolute w-52 rounded-full"
					/>
				</section>
			</main>
		</div>
	);
};

export default MainPage;
