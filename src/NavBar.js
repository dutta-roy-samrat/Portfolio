import React from "react";
import {connect} from 'react-redux';
import { toggle } from "./redux/index";
function NavBar(props){
    return(
        <div>
            <nav className={props.navBar?'nav-page':'nav-items'}>
                <p className='nav-item'>About</p>
                <p className='nav-item'>Resume</p>
                <p className='nav-item'>Projects</p>
                <p className='nav-item'>Contacts</p>
            </nav>
        </div>
    );
}
function mapStateToProps(globalState){
    return {
        navBar:globalState.navBar
    }
}
const mapDispatchToProps={
    toggle:toggle
}
export default connect(mapStateToProps,mapDispatchToProps)(NavBar);