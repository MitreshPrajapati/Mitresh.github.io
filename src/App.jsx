
import { Flex, VStack } from '@chakra-ui/react';
// import './App.css';
import { AboutMe } from './Components/about/AboutMe';
import { Contact } from './Components/contact/Contact';
import { Experience } from './Components/experience/Experience';
import { Footer } from './Components/footer/Footer';
import { Header } from './Components/header/Header';
import { Navbar } from './Components/navbar/Navbar';
import { Projects } from './Components/portfolio/Projects';
import { Skills } from './Components/skills/Skills';


function App() {
  return (
    <>
      <Header/>
      <Navbar/>
      <AboutMe/>
      {/* <Experience/> */}
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
