import { Link } from "react-router-dom";
import style from "./ChatList.module.css";
import { Wrap } from "./Wrap";

export const ChatList = ({ list }) => {
  const id = list.map((item) => item.id);

  return (
    <>
      <Wrap>
        {list.map((item) => (
          <Link to={item.id} key={item.id} className={style.link}>
            {item.name}
          </Link>
        ))}
      </Wrap>
    </>
  );
};
