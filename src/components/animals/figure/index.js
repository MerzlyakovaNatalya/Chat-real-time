import Image from "react-bootstrap/Image";
import style from "./Figure.module.css";

export const Figure = (props) => {
  return (
    <>
      <Image src={props.url} className={style.img}></Image>
      <p>{props.facts}</p>
    </>
  );
};
