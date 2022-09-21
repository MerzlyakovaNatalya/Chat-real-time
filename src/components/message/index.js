import React from "react";
import style from "./Message.module.css";

export const Message = ({ messageList }) => {
  return (
    <>
      <div>
        {messageList?.map((item, index) => (
          <div key={index} className={style.wrap}>
            <p>{item.author}</p>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </>
  );
};
