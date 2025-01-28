import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from 'next/font/google'
import "./globals.css";

const inter = Plus_Jakarta_Sans({ subsets: ['latin'] })

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });


export const metadata: Metadata = {
  title: 'Sujal Bhavsar - Full Stack Developer',
  description: 'Portfolio of Sujal Bhavsar, a full stack developer from India passionate about crafting solutions and building the future.',
  keywords: 'Sujal Bhavsar, Full Stack Developer, Portfolio, Sujal Bhavsar Projects, Sujal Bhavsar Blog, Sujal bhavsar Contact',
  openGraph: {
    description: 'Portfolio of Sujal Bhavsar, a full stack developer from India passionate about crafting solutions and building the future.',
    images: ['https://instagram.famd5-2.fna.fbcdn.net/v/t51.2885-19/472152403_1575718446475229_5681285894065474611_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=instagram.famd5-2.fna.fbcdn.net&_nc_cat=105&_nc_ohc=7aQj6lR22mYQ7kNvgFSL1sE&_nc_gid=6209a403c84b448aad5847e6103ef863&edm=ACE-g0gBAAAA&ccb=7-5&oh=00_AYCd2xdtMCFghdnbC7BrmXkGN8AzWg-8lMkJeaIQ3MLZUQ&oe=679F2916&_nc_sid=b15361']
  },
  icons: {
    icon: '/favicon.ico',
  }
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
