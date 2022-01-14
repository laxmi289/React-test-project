import React from "react";

import "./Popup.styles.css";

class Popup extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      phone: "",
    };

    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(e) {
    e.preventDefault();
    this.props.sendNewUserToHeader(this.state);
  }

  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          <div>
            <form id="form" onSubmit={this.submitHandler}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => this.setState({ name: e.target.value })}
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  className="form-control"
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input
                  className="form-control"
                  onChange={(e) => this.setState({ phone: e.target.value })}
                />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
          <button onClick={this.props.closePopup}>close me</button>
        </div>
      </div>
    );
  }
}

export default Popup;
