import React, { useEffect, useState } from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import db from "./firebase";
import Message from "./Message";
import Chatinput from "./Chatinput";

function Chat() {
  const { roomId } = useParams();
  const [roomdetails, setroomdetails] = useState(null);
  const [roommessages, setroommessages] = useState([]);

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setroomdetails(snapshot.data()));
    }
    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setroommessages(snapshot.docs.map((doc) => doc.data()))
      );
  }, [roomId]);

  console.log("roomdetails", roomdetails);
  console.log("Room Messages", roommessages);

  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerleft">
          <h4 className="chat__channelname">
            <strong>#{roomdetails?.name}</strong>
            <StarBorderOutlinedIcon />
          </h4>
        </div>
        <div className="chat__headerright">
          <p>
            <InfoOutlinedIcon />
            Details
          </p>
        </div>
      </div>

      <div className="chat__messages">
        {roommessages.map(({ message, timestamp, user, userImage }) => (
          <Message
            message={message}
            timestamp={timestamp}
            user={user}
            userImage={userImage}
          />
        ))}
      </div>
      <Chatinput channelname={roomdetails?.name} channelid={roomId} />
    </div>
  );
}

export default Chat;
