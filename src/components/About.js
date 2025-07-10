import User from "./User";
import UserClassComponent from "./UserClassComponent";

export const About = () => {
  return (
    <div className="about-container">
      <h1>About our F🍛🍛d Standards </h1>
      {User()}

      <UserClassComponent />
    </div>
  );
};
