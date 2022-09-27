import style from "./Home.module.css";
import { PostsPage } from "../posts";

export const Home = () => {
  return (
    <>
      <h1 className={style.title}>HOME</h1>
      <PostsPage />
    </>
  );
};
