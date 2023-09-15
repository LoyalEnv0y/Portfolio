import React from 'react';
import ReactDOM from 'react-dom/client';

import '../public/index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.tsx';
import About from './pages/About.tsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				path: '/',
				element: <About />,
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

