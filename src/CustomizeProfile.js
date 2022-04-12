import Clock from "./Clock";
import React, { useState, useEffect } from "react";
import "./styles/CustomizeProfile.css"


class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            Background: "#FFFFFF",
            Font: "#000000",
            Name: "User"
        }
    }

    togglePopup = () => {
        if(!this.state.isOpen){
            document.getElementById("customize").style.visibility = "visible";
            this.state.isOpen = true;
        }else{
            document.getElementById("customize").style.visibility = "hidden";
            this.state.isOpen = false;
        }
        return false;
    }

    customize = () => {
       if(document.getElementById("name").value != ""){
           this.setState({Name: document.querySelector('input').value});
       }
       if(document.getElementById("background").value !="") {
            document.getElementById('root').style.backgroundColor = document.getElementById('background').value;
       }
       if(document.getElementById("textColor").value != "") {
           document.getElementById('root').style.color = document.getElementById("textColor").value;
       }

       this.togglePopup();
    }

    render() {
        return (
            <div>
            <h1>Hello {this.state.Name}</h1>
            <Clock />
            <button onClick={this.togglePopup}> Customize </button>
            <form action="" id="customize" onSubmit={e => e.preventDefault()}>
                <a href="#" className="close" onClick={this.togglePopup}>&times;</a>
                <h2>CustomizeProfile</h2>
                <div className="input-group">
                    <input type="text" name="Name" id="name"></input>
                    <label htmlFor="loginUser">Name</label>
                </div>
                <div className="input-group">
                    <input type="text" name="background" id="background"></input>
                    <label htmlFor="background">Background Color</label>
                </div>
                <div className="input-group">
                    <input type="text" name="textColor" id="textColor"></input>
                    <label htmlFor="textColor">Text Color</label>
                </div>
                <button className="submit-btn" onClick={this.customize}> Submit </button>
            </form>
            </div>
        )
    }

}

export default Profile;