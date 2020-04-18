import React from "react";

import {
  getAlbumsListThunk,
  setTitleUser,
  setBodyUser,
  postTitleBodyThunk,
} from "./redux/reducers/homeReducers/home.reducer";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import {
  getPostsDataThunk,
  getPhotosDataThunk,
} from "./redux/reducers/AboutReducers/about.reducer";

function App() {
  const dispatch = useDispatch();
  const titleValue = useSelector((state) => state.homeReducer.titleValue);
  const bodyValue = useSelector((state) => state.homeReducer.bodyValue);

  /*
  dispatch(getAlbumsListThunk());
  dispatch(getPostsDataThunk());
  dispatch(getPhotosDataThunk());
*/

  const changeInputTitle = (e) => {
    dispatch(setTitleUser(e.target.value));
  };

  const changeInputBody = (e) => {
    dispatch(setBodyUser(e.target.value));
  };

  const onButtonClick = () => {
    console.log("clicked");
    dispatch(postTitleBodyThunk(titleValue, bodyValue));
  };
  return (
    <div className="app">
      <input
        onChange={changeInputTitle}
        type="text"
        placeholder="enter title"
        value={titleValue}
      />{" "}
      <br />
      <input
        onChange={changeInputBody}
        type="text"
        placeholder="enter body"
        value={bodyValue}
      />
      <button onClick={onButtonClick}>Click me!!!!!!!!!</button>
    </div>
  );
}

export default App;
