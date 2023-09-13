import { NavLink } from 'react-router-dom';
import { Link } from '../../types';
import { v4 as uuid } from 'uuid';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';

const links: Link[] = [
	{ id: uuid(), content: 'Kim? Kim??', to: '' },
	{ id: uuid(), content: 'Başlangıç', to: 'start' },
	{ id: uuid(), content: 'Programlamanın Temelleri', to: 'fundamentals' },
	{ id: uuid(), content: 'Yeni Okul Yeni Teknolojiler', to: 'news' },
	{ id: uuid(), content: 'Günümüz', to: 'present' },
];

const AboutNav = () => {
	const getNavLinkClasses = ({ isActive }: { isActive: boolean }): string => {
		const baseClasses = 'flex items-center text-zinc-500 underline-offset-4';

		return twMerge(
			classNames(baseClasses, {
				'underline text-white font-semibold': isActive,
			})
		);
	};

	return (
		<nav className="flex text-sm">
			{links.map((link, i) => (
				<NavLink
					key={link.id}
					to={link.to}
					className={getNavLinkClasses}
					end={i === 0}
				>
					<p className=" hover:text-white">{link.content}</p>
					{i != links.length - 1 && <NavigateNextIcon />}
				</NavLink>
			))}
		</nav>
	);
};

export default AboutNav;
