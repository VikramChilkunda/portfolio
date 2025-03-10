import './globals.css'
import 'leaflet/dist/leaflet.css';
import { Inter } from 'next/font/google'
import LayoutWrapper from './layoutwrapper';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Vikram Chilkunda, Software Engineer - Portfolio',
	description: 'Vikram Chilkunda, Software Engineer - Portfolio',
	keywords: "react, backend, .NET, C#, C++, Python, Java, JavaScript, NextJS"
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<script src="https://unpkg.com/leaflet@latest/dist/leaflet.js"></script>
				<script src="https://unpkg.com/leaflet-providers@latest/leaflet-providers.js"></script>
				<title>Vikram Chilkunda's Portfolio</title>
			</head>
			<body className={`${inter.className} overscroll-contain`}>
				<LayoutWrapper>{children}</LayoutWrapper>
				<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
					integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
				></script>
			</body>
		</html>
	)
}
