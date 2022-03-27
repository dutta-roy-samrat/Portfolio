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
  function disappear(){
    if(props.navBar){
    return setTimeout(()=>'none',props.time);}
    else{
      return 'block'
    }
  }
  return (
    
    <div className="App">
      
      <NavBar/>
      <div className={props.navBar?'nav-close':'nav_dropdown'} onClick={props.toggle}>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
      </div>
      <div className='about'style={{display:disappear()}}>
        <Header />
        <Card/>
        <Intro/>
      </div>
      <div className='contact' style={{display:disappear()}}>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}
function mapStateToProps(globalState){
  return{
    navBar:globalState.navBar,
    time:globalState.time
  };
}
const mapDispatchToProps={
  toggle:toggle
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
