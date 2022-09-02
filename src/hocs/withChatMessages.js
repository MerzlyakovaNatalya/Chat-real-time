import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getChatMessagesById } from "../store/messages/selector";
import { hasChatById } from "../store/chats/selectors";
import { sendMessageWithThunk } from "../store/messages/action";
import { USER_AUTHOR } from "../constans/userAuthor";

export const withChatMessages = (Component) => {
  return (props) => {
    const { chatId } = useParams();
    const dispatch = useDispatch();
    const messageList = useSelector(getChatMessagesById(chatId));
    const hasChat = useSelector(hasChatById(chatId));

    const onSendMessage = (evt, text) => {
      evt.preventDefault();
      console.log(evt);
      dispatch(sendMessageWithThunk(USER_AUTHOR, text, chatId));
    };

    return (
      <Component
        {...props}
        messageList={messageList}
        hasChat={hasChat}
        onSendMessage={onSendMessage}
      />
    );
  };
};
