import MainPageHeader from '../components/mainPage/Header';
import Slider from '../components/mainPage/Slider';

const MainPage = () => {
	return (
		<div className="font-poppins">
			<MainPageHeader />
			<Slider />

			<main className="w-full text-white p-10 bg-[#111928]">
				<section className="h-screen w-full">
					<div className="relative flex w-52 rounded-full">
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
					</div>
				</section>
			</main>
		</div>
	);
};

export default MainPage;
