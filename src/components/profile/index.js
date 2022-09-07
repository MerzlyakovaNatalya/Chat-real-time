import style from "./Profile.module.css";
import { useDispatch, useSelector } from "react-redux";
import { TOGGLE_SHOW_PROFILE } from "../../store/profile/action"

export const Profile = () => {
    
    const dispatch = useDispatch();
    const isShow = useSelector((state) => state.isShow);

    return <>
          <h1 className={style.title}>PROFILE</h1>
          <input type="checkbox" checked={isShow} onChange={() => {
              dispatch({
                  type: TOGGLE_SHOW_PROFILE
              })
          }} />
    </>
};