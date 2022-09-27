import { getRandomAnimals } from "../store/animals/action";
import { useDispatch, useSelector } from "react-redux";
import { getAnimalsData } from "../store/animals/selectors";

export const withAnimals = (Component) => {
  return (props) => {
    const data = useSelector(getAnimalsData);
    const isError = useSelector((state) => state.animals.isError);
    const isLoading = useSelector((state) => state.animals.isError);

    const dispatch = useDispatch();

    const getData = () => {
      dispatch(getRandomAnimals);
    };

    return (
      <Component
        {...props}
        data={data}
        isError={isError}
        isLoading={isLoading}
        getData={getData}
      />
    );
  };
};
