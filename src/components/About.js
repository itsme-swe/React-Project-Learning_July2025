import User from "./UserFunctionalComponent";
import UserClassComponent from "./UserClassComponent";

export const About = () => {
  return (
    <div className="about-container">
      <h1>About our F🍛🍛d Standards </h1>
      {User()}

      <UserClassComponent
        name={"Vasu Mehra"}
        location={"Ajmer,Raj."}
        contact={"vasu@gmail.com"}
      />
    </div>
  );
};
