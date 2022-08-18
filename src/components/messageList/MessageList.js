import style from "./MessageList.module.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMessage } from "../../hooks/useMessage";
import { Message } from "../message/Message";

export const MessageList = () => {
  const { chatId } = useParams();
  const [
    messageList,
    value,
    ref,
    { onSubmitMessage, onChangeMessageInput, sendMessage, focus },
  ] = useMessage();

  useEffect(() => {
    focus();
    if (messageList.length === 0) {
      return;
    }

    const tail = messageList[messageList.length - 1];

    if (tail.author === "bot") {
      return;
    }

    //sendMessage("bot", "hello");
    const timeout = setTimeout(sendMessage, 1100, "bot", "hello");

    return () => clearTimeout(timeout);
  }, [messageList]);

  return (
    <div className={style.wrap}>
      <Message messageList={messageList} />
      <form onSubmit={onSubmitMessage}>
        <textarea
          type="text"
          ref={ref}
          rows="10"
          cols="45"
          name="text"
          onChange={onChangeMessageInput}
          value={value}
          placeholder="Message"
        ></textarea>
        <button type="submit">Send {chatId}</button>
      </form>
    </div>
  );
};
