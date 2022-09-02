import { useDispatch, useSelector } from "react-redux";
import { createChat } from "../store/chats/action";
import { useCallback } from "react";
import { chat } from "../helpers/index";
import { getChatList } from "../store/chats/selectors";
import { removeChat } from "../store/chats/action";
import { removeMessagesByChatID } from "../store/messages/action";

export const withChatList = (Component) => {
  return (props) => {
    const list = useSelector(getChatList);
    const dispatch = useDispatch();

    const onCreate = useCallback(() => {
      dispatch(createChat(chat));
    }, []);

    const onDelete = (chatId) => {
      dispatch(removeChat(chatId));
      dispatch(removeMessagesByChatID(chatId));
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
