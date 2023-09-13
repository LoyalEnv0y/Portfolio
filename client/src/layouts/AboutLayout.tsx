import { Outlet } from 'react-router-dom';
import AboutNav from '../components/about/AboutNav';

const AboutLayout = () => {
	return (
		<div className="flex h-screen flex-col items-center">
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

			<AboutNav />

			<Outlet />
		</div>
	);
};

export default AboutLayout;
