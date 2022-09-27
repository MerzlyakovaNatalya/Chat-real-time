import React from 'react';
import style from './ProfileUser.module.css';
import { getUser } from "../../../store/profile/selector";
import { useSelector } from "react-redux";

export const ProfileUser = () => {

    const registeredUser = useSelector(getUser);
    return (
        <div>
              <h4 className={style.title}>{registeredUser.email}</h4>
              <p className={style.text}>
              Your profile...
              </p> 
        </div>
    )
}
