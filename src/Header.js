import React from 'react'

import {connect} from "react-redux";
import {toggle} from './redux/index'
function Header(props){
    return(
    <header className="navbar">
        <div>
            <h1 className='name'>Samrat Dutta Roy</h1>
            <h4 className='job'><div className='green_dot'></div>SENIOR ANALYST</h4>
        </div>
        
      <div className={`nav_dropdown ${props.count===1?props.navBar?'close':'open':''}`} onClick={props.toggle}>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
      </div>

    </header>)
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
  export default connect(mapStateToProps,mapDispatchToProps)(Header);
