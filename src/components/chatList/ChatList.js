import { Link } from "react-router-dom";
import style from "./ChatList.module.css";
import { Wrap } from "./Wrap";
import { ImBin2 } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { createChat } from "../../store/chats/action";
import { useCallback } from "react";
import { chat } from "../../helpers/index";
import { getChatList } from "../../store/chats/selectors";

export const ChatList = () => {
  const list = useSelector(getChatList);
  const dispatch = useDispatch();

  const onCreate = useCallback(() => {
    dispatch(createChat(chat));
  }, []);

  return (
    <>
      <Wrap>
        {list.map((item) => (
          <div className={style.wrap}>
            <Link to={item.id} key={item.id} className={style.link}>
              {item.name}
            </Link>
            <ImBin2 className={style.svg} />
          </div>
        ))}
        <button className={style.button} onClick={onCreate}>
          Create chat
        </button>
      </Wrap>
    </>
  );
};
