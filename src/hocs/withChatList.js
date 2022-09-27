import { useDispatch, useSelector } from "react-redux";
import { createChat } from "../store/chats/action";
import { getChatList } from "../store/chats/selectors";
import { removeChat } from "../store/chats/action";
import { removeMessagesByChatID } from "../store/messages/action";
import { useNavigate } from "react-router-dom";

export const withChatList = (Component) => {
  return (props) => {
    const list = useSelector(getChatList);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onCreate = (chat) => {
      dispatch(createChat(chat));
    };

    const onDelete = (chatId) => {
      dispatch(removeChat(chatId));
      dispatch(removeMessagesByChatID(chatId));
      navigate("/chat");
    };
    return (
      <Component
        {...props}
        list={list}
        onCreate={onCreate}
        onDelete={onDelete}
      />
    );
  };
};
