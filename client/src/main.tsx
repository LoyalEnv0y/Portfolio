import React from 'react';
import ReactDOM from 'react-dom/client';

import '../public/index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.tsx';
import AboutLayout from './layouts/AboutLayout.tsx';
import Who from './pages/about/Who.tsx';
import Start from './pages/about/Start.tsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				path: '/',
				element: <AboutLayout />,
				children: [
					{ index: true, element: <Who /> },
					{ path: 'start', element: <Start /> },
				],
			},
			{
				path: 'technologies',
				element: <div>Technologies page goes here</div>,
			},
			{ path: 'projects', element: <div>Projects page goes here</div> },
			{
				path: 'Certificates',
				element: <div>Certificates page goes here</div>,
			},
			{ path: 'Contact', element: <div>Contact page goes here</div> },
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

