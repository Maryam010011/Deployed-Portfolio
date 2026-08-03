import { useCallback, useState } from 'react';
import useScrollReveal from './hooks/useScrollReveal';

import Cursor from './components/Cursor';
import Bot from './components/Bot';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [modalData, setModalData] = useState(null);

  const openModal = useCallback((src, title, cap) => {
    setModalData({ src, title, cap });
  }, []);
  const closeModal = useCallback(() => setModalData(null), []);

  useScrollReveal();

  return (
    <>
      <Cursor />
      <Bot />
      <Modal data={modalData} onClose={closeModal} />

      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Experience />
      <Projects onOpenModal={openModal} />
      <Certificates onOpenModal={openModal} />
      <Contact />
      <Footer />
    </>
  );
}
