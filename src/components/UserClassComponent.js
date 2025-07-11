import React from "react";

class UserClassComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  render() {
    const { name, location, contact } = this.props;
    const { count } = this.state;
    return (
      <div className="user-card">
        <h1>Count: {count}</h1>
        <button
          className="class-btn"
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          Click To Increase Count
        </button>
        <h3>Name: {name}</h3>
        <h3>Location: {location}</h3>
        <h3>Contact: {contact}</h3>
        <h4>Card by Class Component</h4>
      </div>
    );
  }
}

export default UserClassComponent;
