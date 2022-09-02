import { Link } from "react-router-dom";
import style from "./ChatList.module.css";
import { Wrap } from "./Wrap";
import { ImBin2 } from "react-icons/im";
import { withChatList } from "../../hocs/index";

const ChatListRender = ({ list, onDelete, onCreate }) => {
  return (
    <>
      <Wrap>
        {list.map((item) => (
          <div className={style.wrap} key={item.id}>
            <Link to={item.id} className={style.link}>
              {item.name}
            </Link>
            <ImBin2 className={style.svg} onClick={() => onDelete(item.id)} />
          </div>
        ))}
        <button className={style.button} onClick={onCreate}>
          Create chat
        </button>
      </Wrap>
    </>
  );
};

export const ChatList = withChatList(ChatListRender);
