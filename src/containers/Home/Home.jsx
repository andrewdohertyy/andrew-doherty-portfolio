import React from 'react'
import Main from '../../containers/Main/Main';
import Footer from '../../containers/Footer/Footer';
import Nav from '../../containers/Nav/Nav';
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import AboutContainer from '../../containers/AboutContainer/AboutContainer';
import ContactContainer from '../ContactContainer/ContactContainer';

const Home = () => {
  return (
    <div>
      <Nav />
      <Main />
      <AboutContainer />
      <ProjectContainer />
      <ContactContainer />
      <Footer/>
    </div>
  )
}

export default Home