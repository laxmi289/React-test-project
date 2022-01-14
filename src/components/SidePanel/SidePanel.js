import React from "react";
import {Route, Routes} from "react-router-dom";
  
import AddNewUser from "../AddNewUser/AddNewUser";

import './SidePanel.styles.css';

class SidePanel extends React.Component {
    
    render() {
        return(
            <div id='side-panel'>
                <div id='items-div'>
                    <ul id="ul-items">
                        <li><a href ="/" className="a-item">Add new User</a></li>
                        <li><a href="/" className="a-item">View Added Users</a></li>
                    </ul>
                </div>
            </div>
            
        );
    }
}

export default SidePanel;