import React from "react";
import { useHistory } from "react-router-dom";
import db from "./firebase";
import "./SidebarOption.css";

function SidebarOption({ Icon, title, id, addchanneloption }) {
  const history = useHistory();

  const selectchannel = () => {
    if (id) {
      history.push(`/room/${id}`);
    } else {
      history.push(title);
    }
  };

  const addchannel = () => {
    const channelname = prompt("Please Enter the Channel Name : ");

    if (channelname) {
      db.collection("rooms").add({
        name: channelname,
      });
    }
  };

  return (
    <div
      className="sidebaroption"
      onClick={addchanneloption ? addchannel : selectchannel}
    >
      {Icon && <Icon className="sidebaroption__icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebaroption__channel">
          <span className="sidebaroption__hash">#</span> {title}
        </h3>
      )}
    </div>
  );
}

export default SidebarOption;
