import { Link } from "react-router-dom";
import style from "./ChatList.module.css";
import { Wrap } from "./Wrap";
import { ImBin2 } from "react-icons/im";
import { withChatList } from "../../hocs";
import { chat } from "../../helpers/index";
import { useEffect } from "react";

const ChatListRender = ({ list, onDelete, onCreate }) => {
  //useEffect(() => {
  //  return localStorage.clear();
  //});
  return (
    <>
      <Wrap>
        {list.map((item, index) => (
          <div className={style.wrap} key={index}>
            <Link to={item.id} className={style.link}>
              {item.name}
            </Link>
            <ImBin2 className={style.svg} onClick={() => onDelete(item.id)} />
          </div>
        ))}
        <button className={style.button} onClick={() => onCreate(chat)}>
          Create chat
        </button>
      </Wrap>
    </>
  );
};

export const ChatList = withChatList(ChatListRender);
