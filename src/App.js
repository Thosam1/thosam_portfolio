import React from 'react';


// containers   -- very useful with index.js in container folder
import { About, Footer, Header, Skills, Testimonial, Work } from './container';

// components   -- very useful with index.js in components folder
import { Navbar } from './components';

// styles
import './App.scss';

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    {/* <Testimonial /> */}
    <Footer />
  </div>
);

export default App;
