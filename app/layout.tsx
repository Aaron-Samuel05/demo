import "./globals.css";
import type { Metadata } from "next";
import SmoothScroll from "../components/SmoothScroll";
export const metadata:Metadata={title:"Aaron Samuel — Full-Stack Developer & UI/UX Designer",description:"Aaron Samuel builds immersive digital products, full-stack applications and interactive experiences.",openGraph:{title:"Aaron Samuel — Full-Stack Developer & UI/UX Designer",description:"Creative developer portfolio"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><div className="noise"/><SmoothScroll/>{children}</body></html>}