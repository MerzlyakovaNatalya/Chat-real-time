import style from "./Animals.module.css";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Figure } from "./figure";
import { withAnimals } from "../../hocs";
import { Error } from "../error";
import { Loader } from "../loader";

export const AnimalsRender = ({ data, isError, isLoading, getData }) => {
  useEffect(() => {
    alert("Мобильная версия сайта находится в разработке");
    getData();
    // eslint-disable-next-line
  }, []);

  return (
    <div className={style.wrap}>
      <h1 className={style.title}>ANIMALS</h1>
      {!isError && (
        <Button
          type="button"
          onClick={getData}
          disabled={isLoading}
          className={style.button}
        >
          Reload
        </Button>
      )}
      {isError && <Error />}
      {isLoading && <Loader />}
      {!isLoading && <Figure {...data} />}
    </div>
  );
};

export const Animals = withAnimals(AnimalsRender);
