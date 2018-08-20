import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  toggle = e => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  };

  delete = id => {
    this.props.delete(id);
  };

  render() {
    const { name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <div className="card card-body mb-3">
        <h4>
          {name}{" "}
          <i
            onClick={this.toggle}
            className="fas fa-sort-down"
            style={{ cursor: "pointer" }}
          />
          <i
            onClick={this.delete}
            className="fas fa-times"
            style={{ cursor: "pointer", float: "right", color: "red" }}
          />
        </h4>

        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">{email}</li>
            <li className="list-group-item">{phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  delete: PropTypes.func.isRequired
};

export default Contact;
