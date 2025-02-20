import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import type { Metadata } from "next";
import './mdx-styles.css'

export const metadata : Metadata= {
  title: 'Projects | Sujal Bhavsar',
  description: 'Projects of Sujal Bhavsar, a full stack developer from India passionate about crafting solutions and building the future.',
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className='fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50'>
      <Header visible={false}/>
        </header>
      <main className="px-[20%] bg-gray-50 max-sm:px-[10%] max-md:px-[10%] max-lg:px-[15%] pt-16 mdx-main">
        {children}
      </main>
    <footer className="bg-gray-900 text-white py-12">
      <Footer/>
      </footer>
    </>
  );
}