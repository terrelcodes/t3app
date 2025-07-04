import "~/styles/globals.css";

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Create T3 App",
	description: "Generated by create-t3-app",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
	subsets: ["latin"],
	variable: "--font-geist-sans",
});

const TopNav = () => {
	return (
		<div className="flex justify-between items-center p-4">
			<h1 className="text-2xl font-bold">Gallery</h1>
			<Link href="/">Sign In</Link>
		</div>
	);
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" className={`${geist.variable}`}>
			<body className="bg-black text-white"><TopNav></TopNav>{children}</body>
		</html>
	);
}
