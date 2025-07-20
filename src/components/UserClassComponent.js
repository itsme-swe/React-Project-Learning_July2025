import React from "react";
import UserContext from "../utils/UserContext";

class UserClassComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "abc",
        location: "default",
        email: "xyz",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/itsme-swe");

    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, bio, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img id="profile-img" src={avatar_url} alt="" />
        <h3>Name: {name}</h3>
        <h3>Location: {location}</h3>
        <h3>Bio: {bio}</h3>
        <h4>Card by Class Component</h4>

        <div>
          LoggedInUser
          <UserContext.Consumer>
            {({ loggedInUser }) => <h1 className="text-xl">{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
      </div>
    );
  }
}

export default UserClassComponent;
