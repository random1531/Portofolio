import React from "react";
import "./ModalMailSend.css";

export default function ModalMailSend({message, animation,close}) {
  return (
    <div className="modal_mail_send">
      <div className="modal_mail_send_block">
        <p className="close_mail_send" onClick={close}>X</p>
        <i className={animation}></i>
        <h2 className="response">{message}</h2>
      </div>
    </div>
  );
}
