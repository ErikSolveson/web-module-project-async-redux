import axios from "axios";

export const FETCH_JOKE_LOADING = "FETCH_JOKE_LOADING";
export const FETCH_JOKE_SUCCESS = "FETCH_JOKE_SUCCESS";
export const FETCH_JOKE_FAIL = "FETCH_JOKE_FAIL";

export const updateJoke = () => {
  return (dispatch) => {
    dispatch(fetchJokeLoading());
    axios
      .get("https://icanhazdadjoke.com/")
      .then((res) => {
        fetchJokeSucess(res.data.joke);
      })
      .catch((error) => {
        dispatch(error.error);
      });
  };
};

export const fetchJokeLoading = () => {
  return { type: FETCH_JOKE_LOADING };
};
export const fetchJokeSucess = (joke) => {
  return { type: FETCH_JOKE_SUCCESS, payload: joke };
};
export const fetchJokeFail = (error) => {
  return { type: FETCH_JOKE_FAIL, payload: error };
};
