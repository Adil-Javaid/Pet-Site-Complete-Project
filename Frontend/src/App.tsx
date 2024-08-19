import React, { useRef } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import PetList from './components/PetList';
import PetStoreList from './components/PetStoreList';
import Blog from './components/Blog';
import Navbar from './components/Navbar';
import Service from './components/Service';
import Review from './components/Review';
import AboutUs from './components/AboutUs';

const App: React.FC = () => {
  const petListRef = useRef<HTMLDivElement>(null);
  const petStoreListRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);
  const serviceRef = useRef<HTMLDivElement>(null);
  const reviewRef = useRef<HTMLDivElement>(null);
  const aboutusRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <Navbar
        scrollToSection={scrollToSection}
        petListRef={petListRef}
        petStoreListRef={petStoreListRef}
        blogRef={blogRef}
        serviceRef={serviceRef}
        reviewRef={reviewRef}
        aboutusRef={aboutusRef}
      />
      <header className="App">
        <Outlet />
        <div ref={petListRef}>
          <PetList />
        </div>
        <div ref={petStoreListRef}>
          <PetStoreList />
        </div>
        <div ref={blogRef}>
          <Blog />
        </div>
        <div ref={serviceRef}>
          <Service />
        </div>
        <div ref={reviewRef}>
          <Review />
        </div>
        <div ref={aboutusRef}>
          <AboutUs />
        </div>
      </header>
    </div>
  );
}

export default App;

