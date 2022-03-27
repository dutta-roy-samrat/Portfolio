import './App.css';
import Header from './Header'
import Card from './Card'
import Intro from './Intro'
import Contact from './Contact'
import Footer from './Footer'
import NavBar from './NavBar';
import React from 'react';
import {connect} from "react-redux";
import {toggle} from './redux/index'
function App(props) {
  return (
    
    <div className={`App ${props.navBar?'stop_overflow':''}`}>
      
      <NavBar/>
      <div className='about'>
        <Header />

        <Card/>
        <Intro/>
      </div>
      <div className='contact'>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}
function mapStateToProps(globalState){
  return{
    navBar:globalState.navBar,
    count:globalState.count
  }
}
const mapDispatchToProps={
  toggle:toggle
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
