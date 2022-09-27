import React, { useEffect, useContext } from "react";
import { Context } from "../../App";
import style from "./Profile.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ProfileRoute } from "./Route";
import { ProfileUser } from "./profileUser";
import { initAuthAction } from "../../store/profile/action";
import { getUser } from "../../store/profile/selector";
import Button from "react-bootstrap/Button";

export const Profile = () => {
  const user = useSelector(getUser);
  const { auth } = useContext(Context);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initAuthAction);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <h1 className={style.title}>PROFILE</h1>
      <Link to="/profile/signUp" className={style.a}>
        <Button
          variant="light"
          style={{ boxShadow: "3px 3px 3px blue", marginRight: 8 }}
        >
          SignUp
        </Button>
      </Link>
      <Link to="/profile/login">
        <Button
          type="button"
          variant="light"
          style={{ boxShadow: "3px 3px 3px blue" }}
        >
          Login
        </Button>
      </Link>
      <Link to="/profile/signUp">
        <Button
          type="button"
          variant="light"
          style={{ boxShadow: "3px 3px 3px blue", marginLeft: 30 }}
          onClick={() => auth.signOut()}
        >
          Go out
        </Button>
      </Link>
      <ProfileRoute />
      {
      user && <ProfileUser />
    }
    </>
  );
};
