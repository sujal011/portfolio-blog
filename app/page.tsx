import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import RecentBlogs from './components/Recent-Blogs';
import Skills from './components/Skills';


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className='fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50'>
      <Header/>
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
