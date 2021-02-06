import React from 'react';
import Navbar from './components/Navbar';
import Photo from './components/Photo';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/app.scss';
import styled, { createGlobalStyle } from 'styled-components';

// import './App.css';


const GlobalStyle = createGlobalStyle`
  h1,h2,h3 {
    // font-family: 'Open Sans Condensed', sans-serif;
    font-family: 'Exo', sans-serif;
  }
`;

const Division = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
`;

function App() {
  return (
    <div className="app">
      <GlobalStyle />
      <Navbar />
      <Photo />
      <Division id="services">
        <h1 id="top-line">Tận tâm - Chuyên nghiệp - Đầy kinh nghiệm<br></br>Bao gồm các dịch vụ sau đây</h1>
        <Services />
      </Division>
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
