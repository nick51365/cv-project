import React, { Component } from "react";
import "../styles/sidebar.css";

class Sidebar extends Component{
    constructor(){
        super();

        this.state = {
            test: "test"
        }
    }

    render(){
        return(
            <div className="sidebar">
                <div className="personal-displayed">
                    <input className="firstNameInput" type="text" placeholder="First Name">
                    </input>
                    <input className="lastNameInput" type="text" placeholder="Last Name">
                    </input>
                    <input className="emailInput" type="text" placeholder="E-mail Address">
                    </input>
                </div>
            </div>
        );
    }
}

export default Sidebar;