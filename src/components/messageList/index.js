import style from "./MessageList.module.css";
import { useNavigate } from "react-router-dom";
import { Message } from "../message";
import { MessageInput } from "../messageInput";
import { withChatMessages } from "../../hocs/withChatMessages";

const MessagesRender = ({ messageList, hasChat, onSendMessage }) => {
  const navigate = useNavigate();

  if (!hasChat) {
    return navigate("/chats");
  }

  return (
    <div className={style.wrap}>
      <Message messageList={messageList} />
      <MessageInput onSendMessage={onSendMessage} />
    </div>
  );
};

export const MessagesList = withChatMessages(MessagesRender);
