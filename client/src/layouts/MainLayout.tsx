import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Header from '../components/Header';

const MainLayout = () => {
	return (
		<div className="overflow-x-hidden bg-[#00110B] font-poppins text-white large:w-[1920px]">
			<Header />
			<NavBar />

			<Outlet />
		</div>
	);
};

export default MainLayout;
