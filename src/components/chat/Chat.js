import { ChatList } from "../../components/chatList/ChatList";
import { CHATS } from "../../helpers/index";
import { Outlet } from "react-router-dom";
import { Title } from "./Title";
import { Flex } from "./Flex";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setChats } from "../../store/chats/action";

export const Chat = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setChats(CHATS));
  }, []);

  return (
    <>
      <Flex>
        <Title>CHAT</Title>
        <ChatList />
        <Outlet></Outlet>
      </Flex>
    </>
  );
};
