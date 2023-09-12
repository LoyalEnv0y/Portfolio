import MainPageHeader from '../components/mainPage/Header';
import Slider from '../components/mainPage/Slider';

const MainPage = () => {
	return (
		<div className="font-poppins">
			<MainPageHeader />
			<main className="w-full text-white">
				<Slider />

				<section className="h-screen w-full bg-[#111928]">
					<div className='w-[52rem] flex justify-center border-yellow-400 border'>
						<div className='flex w-52 overflow-hidden border'>
							<img src="/images/PP2.jpg" alt="" className='w-52 animate-roll rounded-full'/>
							<img src="/images/PP1.jpg" alt="" className='w-52 animate-roll rounded-full -rotate-[30deg]'/>
							<img src="/images/PP3.jpg" alt="" className='w-52 animate-roll rounded-full'/>
							<img src="/images/PP4.jpg" alt="" className='w-52 animate-roll rounded-full'/>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
};

export default MainPage;
