import style from "./MessageList.module.css";
import { Message } from "../message";
import { MessageInput } from "../messageInput";
import { withChatMessages } from "../../hocs/withChatMessages";

const MessagesRender = ({
  messageList,
  onSendMessage,
  onChangeMessageInput,
  value,
}) => {
  return (
    <div className={style.wrap}>
      <Message messageList={messageList} />
      <MessageInput
        onSendMessage={onSendMessage}
        onChangeMessageInput={onChangeMessageInput}
        value={value}
      />
    </div>
  );
};

export const MessagesList = withChatMessages(MessagesRender);
