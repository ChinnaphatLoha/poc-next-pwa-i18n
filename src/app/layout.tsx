import './globals.css';
import type { Metadata } from 'next';
import ClientProvider from './client-provider';

export const metadata: Metadata = {
	title: 'My PWA App',
	description: 'A progressive web app built with Next.js and TypeScript',
	icons: [
		{
			url: '/icons/icon-192x192.png',
			sizes: '192x192',
			type: 'image/png',
		},
		{
			url: '/icons/icon-512x512.png',
			sizes: '512x512',
			type: 'image/png',
		},
	],
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
	return (
		<html lang='en'>
			<head>
				<meta
					name='theme-color'
					content='#2563eb'
				/>
				<link
					rel='manifest'
					href='/manifest.webmanifest'
				/>
			</head>
			<body>
				<ClientProvider>{children}</ClientProvider>
			</body>
		</html>
	);
};

export default RootLayout;
