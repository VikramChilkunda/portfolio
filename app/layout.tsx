import './globals.css'
import 'leaflet/dist/leaflet.css';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
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
			</head>
			<body className={`${inter.className} overscroll-contain`}>
				{children}

				<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
					integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
				></script>
			</body>
		</html>
	)
}
