import { ChatList } from "../../components/chatList/ChatList";
import { CHATS } from "../../helpers/mock";
import style from "./Chats.module.css";
import { Outlet } from "react-router-dom";

export const Chat = () => {
  useDispatch();

  return (
    <>
      <div className={style.wrap}>
        <h1>CHAT</h1>
        <div className={style.wrapper}>
          <ChatList list={CHATS}></ChatList>
        </div>
        <Outlet></Outlet>
      </div>
    </>
  );
};
