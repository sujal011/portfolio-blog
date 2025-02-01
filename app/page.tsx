import { Metadata } from 'next';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import RecentBlogs from './components/Recent-Blogs';
import Skills from './components/Skills';

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
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className='fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50'>
      <Header visible={true}/>
        </header>
      <main>
        <Hero/>
        <Skills />
        <Experience />
        <Projects />
        <RecentBlogs />
        <Contact /> 
      </main>
    <footer className="bg-gray-900 text-white py-12">
      <Footer/>
      </footer>
    </div>
  );
}
