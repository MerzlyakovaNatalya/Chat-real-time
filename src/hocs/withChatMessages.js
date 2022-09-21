import { useParams } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getChatMessagesById } from "../store/messages/selector";
import { sendMessageWithThunk } from "../store/messages/action";
import { USER_AUTHOR } from "../constans/userAuthor";

export const withChatMessages = (Component) => {
  return (props) => {
    const [value, setValue] = useState("");
    const { chatId } = useParams();
    const dispatch = useDispatch();
    const messageList = useSelector(getChatMessagesById(chatId));

    const onChangeMessageInput = (event) => {
      setValue(event.target.value);
    };

    const onSendMessage = (e) => {
      e.preventDefault();
      dispatch(sendMessageWithThunk(USER_AUTHOR, value, chatId));
      setValue("");
    };

    return (
      <Component
        {...props}
        messageList={messageList}
        onChangeMessageInput={onChangeMessageInput}
        onSendMessage={onSendMessage}
        value={value}
      />
    );
  };
};
