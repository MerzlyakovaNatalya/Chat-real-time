import { Layout } from "../components/layout";
import { Routes, Route } from "react-router-dom";
import { Home } from "../components/home";
import { Profile } from "../components/profile";
import { Chat } from "../components/chat";
import { Animals } from "../components/animals";
import { MessagesList } from "../components/messageList/index";

export function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="chat/*" element={<Chat />}>
            <Route path=":chatId" element={<MessagesList />} />
          </Route>
          <Route path="animals" element={<Animals />} />
          <Route path="*" element={"Ошибка"} />
        </Route>
      </Routes>
    </>
  );
}
