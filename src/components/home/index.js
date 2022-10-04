import style from "./Home.module.css";
import { PostsPage } from "../posts";
import { useEffect } from "react";

export const Home = () => {

  useEffect(() => {
    alert("Мобильная версия сайта находится в разработке");
  })
  return (
    <>
      <h1 className={style.title}>HOME</h1>
      <PostsPage />
    </>
  );
};
