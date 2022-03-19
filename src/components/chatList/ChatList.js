import { Link } from "react-router-dom";
import style from './ChatList.module.css';
import { useLocation } from 'react-router-dom';

export const ChatList = ({list}) => {

    const url = useLocation();
    console.log(url);

    return (
        <>
        <div className={style.wrap}>
            {list.map((item) => 
                <Link to=':chatId' key={item.id} className={style.link}>{item.name}</Link>
            )}
        </div>
        </>
    )
}