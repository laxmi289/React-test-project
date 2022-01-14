import React from "react";

import Popup from "../Popup/Popup";

import "./Header.styles.css";

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      showPopup: false,
    };
  }

  sendNewUserToHeader = (user) => {
      this.props.addNewUser(user);
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }


  render() {
    return (
      <div id="header-div">
        <h3 id="header">React Demo</h3>
        <div id="btn-div">
          <button id="btnAdd" onClick={this.togglePopup.bind(this)}>Add New User</button>
          {this.state.showPopup ? (
            <Popup text="Close Me" closePopup={this.togglePopup.bind(this)} sendNewUserToHeader={this.sendNewUserToHeader}/>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Header;
