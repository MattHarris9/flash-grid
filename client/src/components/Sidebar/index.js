import React, {useState} from "react";
import "./styles.css";
import SignIn from "../Login/SignIn";
import { Container } from "react-bootstrap";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Sidebar() {
    


  return (
    <div className="whole">
      <SignIn />
      <br></br>
      <br></br>
    </div>
  );
}
export default Sidebar;
