import './App.css';
import Header from './Header'
import About from './About';
import Contact from './Contact'
import Footer from './Footer'
import NavBar from './NavBar';
import React from 'react';
import {connect} from "react-redux";
import {toggle} from './redux/index'
import {Routes as Switch,Route} from 'react-router-dom'
import Resume from './Resume';
import Projects from './Projects';
import ContactForm from './ContactForm';
function App(props) {
  const [app,setApp]=React.useState('')
  function show(){
    if(document.documentElement.scrollHeight-window.innerHeight===Math.ceil(window.scrollY)){
      setApp('show')
    }
    // else{
    //   if(app==='show'){
    //     setApp('');
    //   }
    // }
  }
  React.useEffect(()=>{
  window.addEventListener('scroll',show)},[])
  return (
    
    <div className={`App ${props.navBar?'stop_overflow':''}`}>
      <Header/>
      <Switch>
          <Route exact path="/" element={<About/>}/>
          <Route path='/resume' element={<Resume/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<ContactForm/>}/>
      </Switch>
      
      <div className='contact'>
        <Contact/>
        <Footer/>
      </div>
      <button className={`backToTop ${app}`} onClick={()=>window.scrollTo(0,0)}><i className="fa-solid fa-arrow-up"></i></button>
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
