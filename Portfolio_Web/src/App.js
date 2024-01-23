import React from 'react';
// components
import Header from "../src/components/Header";
import Banner from "../src/components/Banner";
import Nav from "../src/components/Nav";
import About from "../src/components/About";
import Services from "../src/components/Services";
import Work from "../src/components/Work";
import Contact from "../src/components/Contact";


const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
      <div className='h-[4000px]'></div>
    </div>
  );
};

export default App;

