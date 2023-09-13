import { NavLink } from 'react-router-dom';
import { Link } from '../../types';
import { v4 as uuid } from 'uuid';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';

const links: Link[] = [
	{ id: uuid(), content: 'Kim? Kim??', to: '' },
	{ id: uuid(), content: 'Başlangıç', to: 'start' },
	{ id: uuid(), content: 'Temeller', to: 'fundamentals' },
	{ id: uuid(), content: 'Yenilikler', to: 'news' },
	{ id: uuid(), content: 'Günümüz', to: 'present' },
];

const AboutNav = () => {
	const getNavLinkClasses = ({ isActive }: { isActive: boolean }): string => {
		const baseClasses =
			'flex items-center justify-evenly text-zinc-500 underline-offset-4';

		return twMerge(
			classNames(baseClasses, {
				'underline text-white font-semibold': isActive,
			})
		);
	};

	return (
		<nav className="my-10 flex flex-col text-sm sm:flex-row">
			{links.map((link, i) => (
				<div className='flex flex-col items-center sm:flex-row'>
					<NavLink
						key={link.id}
						to={link.to}
						className={getNavLinkClasses}
						end={i === 0}
					>
						<p className=" hover:text-white">{link.content}</p>
					</NavLink>
					{i != links.length - 1 && <NavigateNextIcon className='rotate-90 sm:rotate-0'/>}
				</div>
			))}
		</nav>
	);
};

export default AboutNav;
