import { ChatList } from "../../components/chatList/ChatList";
import { CHATS } from "../../helpers/mock";
import { Outlet } from "react-router-dom";
import { Title } from "./Title";
import { Flex } from "./Flex";

export const Chat = () => {
  return (
    <>
      <Flex>
        <Title>CHAT</Title>
        <ChatList list={CHATS}></ChatList>
        <Outlet></Outlet>
      </Flex>
    </>
  );
};
