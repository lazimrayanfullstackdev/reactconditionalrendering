import React from "react";
import Input from "./Input.jsx";

function Form(props) {
  const { userIsRegistered } = props;

  return (
    <div>
      <form className="form">
        <Input type="text" placehold="Username" />
        <Input type="password" placehold="Password" />
        {userIsRegistered?null:<Input type="password" placehold="Confirm Password" />}
        {userIsRegistered?<button type="submit">Login</button>:<button type="submit">Register</button>}
      </form>
    </div>
  );
}

export default Form;

