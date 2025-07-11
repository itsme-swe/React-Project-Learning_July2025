import User from "./UserFunctionalComponent";
import UserClassComponent from "./UserClassComponent";
import React from "react";

class About extends React.Component {
  render() {
    return (
      <div className="about-container">
        <h1>About our F🍛🍛d Standards </h1>
        <UserClassComponent
          name={"Vasu Mehra"}
          location={"Ajmer, Raj"}
          email={"vasu@gmail.com"}
        />
      </div>
    );
  }
}

export default About;

// export const About = () => {
//   return (
//     <div className="about-container">
//       <h1>About our F🍛🍛d Standards </h1>
//       {User()}

//       <UserClassComponent
//         name={"Vasu Mehra"}
//         location={"Ajmer,Raj."}
//         contact={"vasu@gmail.com"}
//       />
//     </div>
//   );
// };
