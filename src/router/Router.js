import { Header } from "../components/layout/Layout";
import { Routes, Route } from "react-router-dom";
import { Home } from "../components/home/Home";
import { Profile } from "../components/profile/Profile";
import { Chat } from "../components/chat/Chat";
import { MessageList } from "../components/messageList/MessageList";

export function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="chat/*" element={<Chat />}>
            <Route path=":chatId" element={<MessageList />} />
          </Route>
          <Route path="*" element={"Ошибка"} />
        </Route>
      </Routes>
    </>
  );
}
