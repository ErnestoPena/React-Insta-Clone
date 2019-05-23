import React from 'react';
import './searchbar.css';
import logo from './logo.png';
import logotext from './logotext.png';



const BarSearch = props => {
    return(
        <div className="my_bar">
            <div className="search_bar_container">
                <div className="logos">
                   <img className="logo" src={logo} alt="Instagram"/><div className="vertical_div"></div><img className="logotext" src={logotext} alt="Instagram"/> 
                </div>
                <div className="search_input_div">
                    <input className="search" type="text" placeholder="&#xF002; Search"></input>
                </div>
                <div className="account_logos">
                <i class="fal fa-search"></i>
                </div>
            </div>
           
        </div>
    )
}


export default BarSearch;