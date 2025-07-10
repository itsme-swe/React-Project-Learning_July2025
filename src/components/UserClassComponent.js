import React from "react";

class UserClassComponent extends React.Component {
  render() {
    return (
      <div className="user-card">
        <h3>Name: Harsh</h3>
        <h3>Location: Malviya Nagar</h3>
        <h3>Contact: harsh@gmail.com</h3>
        <h4>Card by Class Component</h4>
      </div>
    );
  }
}

export default UserClassComponent;
