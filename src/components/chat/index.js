import { ChatList } from "../chatList";
import { Outlet } from "react-router-dom";
import { Title } from "./Title";
import { Flex } from "./Flex";

export const Chat = () => {
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
