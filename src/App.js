import './App.css';
import Header from './components/Header';
import About from './pages/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import React from 'react';
import {connect} from "react-redux";
import {Routes as Switch,Route} from 'react-router-dom'
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import ContactForm from './pages/ContactForm';
import styles from './App.module.css'
function App(props) {
  return (
    <div className={props.desktop?`${styles.App}`:`${styles.App} ${props.navBar?`${styles.stop_overflow}`:''}`}>
      <Header/>
      <Switch>
          <Route path='/' element={<About/>}/>
          <Route path='/resume' element={<Resume/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<ContactForm/>}/>
      </Switch>
      <div className={styles.contact}>
        <Contact/>
        <Footer/>
      </div>
      <button className={styles.backToTop} onClick={()=>window.scrollTo(0,0)}><i className="fa-solid fa-arrow-up"></i></button>
    </div>
  );
}
function mapStateToProps(globalState){
  return{
    navBar:globalState.navBar,
    count:globalState.count,
    desktop:globalState.desktop
  }
}
export default connect(mapStateToProps)(App);
