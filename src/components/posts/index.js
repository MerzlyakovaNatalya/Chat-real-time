import style from "./PostsPage.module.css";
import {postsReducer} from "../../store/posts";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Loader} from "../loader";
import {Error} from "../error";

export const PostsPage = () => {
  const data = useSelector(postsReducer.selectors.getData)
  const error = useSelector(postsReducer.selectors.getError)
  const loading = useSelector(postsReducer.selectors.getLoading)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postsReducer.actions.getDataWithThunk);
  }, [])

  return <div>
    {
      error &&
      <Error/>
    }
    {
      loading &&
      <Loader/>
    }

    <ul>
      {
        data.length > 0 && data.map((item) => (<li key={item.id} className={style.li}>
          <h4 className={style.title}>
            {item.title}
          </h4>
          <p><img src="item.thumbnailUrl" 
           width="189" height="255" alt="lorem"/></p>
        </li>))
      }
    </ul>
  </div>
}