import { Layout } from "../components/layout";
import { Routes, Route } from "react-router-dom";
import { Home } from "../components/home";
import { Profile } from "../components/profile";
import { Chat } from "../components/chat";
import { Animals } from "../components/animals";
import { MessagesList } from "../components/messageList/index";
import { ChatFirebase } from "../components/chatFirebase/index";

export function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="profile/*" element={<Profile />} />
          <Route path="chat/*" element={<Chat />}>
            <Route path=":chatId" element={<MessagesList />} />
          </Route>
          <Route index element={<Animals />} />
          <Route path="chatFirebase/*" element={<ChatFirebase />} />
          <Route path="*" element={"Ошибка"} />
        </Route>
      </Routes>
    </>
  );
}
