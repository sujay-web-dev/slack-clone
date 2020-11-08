import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "./firebase";
import "./Login.css";
import { actionTypes } from "./reducer";
import { useStateValue } from "./Stateprovider";

function Login() {
  const [state, dispatch] = useStateValue();

  const signin = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      {/* <h1>LOGIN PAGE</h1> */}
      <div className="login__container">
        <img src="logo.png" alt="" />
        <h1>Sign in to Sujay React Community</h1>
        <p>SujayReactCommunity.slack.com</p>
        <Button onClick={signin}>Sign In with Google</Button>
      </div>
    </div>
  );
}

export default Login;
