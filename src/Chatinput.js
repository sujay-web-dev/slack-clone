import { Button } from "@material-ui/core";
import React, { useState } from "react";
import "./Chatinput.css";
import db from "./firebase";
import { useStateValue } from "./Stateprovider";
import firebase from "firebase";

function Chatinput({ channelname, channelid }) {
  const [input, setinput] = useState("");
  const [{ user }] = useStateValue();

  const sendmessage = (e) => {
    e.preventDefault();
    if (channelid) {
      db.collection("rooms").doc(channelid).collection("messages").add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user.displayName,
        userImage: user.photoURL,
      });
    }
    setinput("");
  };

  return (
    <div className="chatinput">
      <form action="">
        <input
          value={input}
          onChange={(e) => setinput(e.target.value)}
          placeholder={`Message #${channelname?.toLowerCase()}`}
        />
        <Button type="submit" onClick={sendmessage}>
          Send
        </Button>
      </form>
    </div>
  );
}

export default Chatinput;
