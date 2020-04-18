import api from "../../../api/api";

const GET_ALBUMS = "GET_ALBUMS";
const SET_TITLE = "SET_TITLE";
const SET_BODY = "SET_BODY";

const initialState = {
  albums: [],
  titleValue: "",
  bodyValue: "",
};

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BODY: {
      return { ...state, bodyValue: action.value};
    }
    case SET_TITLE: {
      return { ...state, titleValue: action.value };
    }
    case GET_ALBUMS: {
      return { ...state, albums: [...action.albums] };
    }
    default:
      return state;
  }
};

const getAlbumsData = (albums) => {
  return {
    type: GET_ALBUMS,
    albums,
  };
};

export const setTitleUser = (value) => {
  return {
    type: SET_TITLE,
    value,
  };
};

export const setBodyUser = (value) => {
  return {
    type: SET_BODY,
    value,
  }
};

export const getAlbumsListThunk = () => {
  return (dispatch) => {
    return api.getAlbums().then((response) => {
      dispatch(getAlbumsData(response.data));
    });
  };
};

export const postTitleBodyThunk = (titleValue, bodyValue) => {
  return (dispatch) => {
    return api.postPosts(titleValue, bodyValue)
  };
};


export default homeReducer;
