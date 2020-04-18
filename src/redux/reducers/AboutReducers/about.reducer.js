import api from "../../../api/api";

const GET_POST = "GET_POST";
const POST_POST = "POST_POST";
const GET_PHOTOS = "GET_PHOTOS";

const initialState = {
  posts: [],
  photos: [],
};

export const aboutReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST: {
      console.log(action.posts);
      return {
        ...state,
        posts: [...action.posts],
      };
    }
    case GET_PHOTOS: {
      return {
        ...state,
        photos: [...action.photos],
      };
    }
    default:
      return state;
  }
};

const getPostsData = (posts) => {
  return {
    type: GET_POST,
    posts,
  };
};

const getPhotosData = (photos) => {
  return {
    type: GET_PHOTOS,
    photos,
  };
};

export const getPostsDataThunk = () => {
  return (dispatch) => {
    return api.getPosts().then((response) => {
      dispatch(getPostsData(response.data));
    });
  };
};

export const getPhotosDataThunk = () => {
  return (dispatch) => {
    return api.getPhotos().then((response) => {
      dispatch(getPhotosData(response.data));
    });
  };
};
export default aboutReducer;
