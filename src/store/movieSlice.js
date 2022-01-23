import { createSlice } from "@reduxjs/toolkit";

const initialMovieState = {
  totalMedia: [],
  movies: [],
  similarMedia: [],
  query: "",
};

const movieSlice = createSlice({
  name: "movieSlice",
  initialState: initialMovieState,
  reducers: {
    addTotalMedia(state, action) {
      state.movies = action.payload;
    },
    addMovies(state, action) {
      state.movies = action.payload;
      state.totalMedia = action.payload;
    },
    addSimilarMedia(state, action) {
      state.similarMedia = action.payload;
      const total = [...state.totalMedia, ...action.payload];
      state.totalMedia = total;
    },
    clearStateQuery(state) {
      state.query = "";
    },
    setStateQuery(state, action) {
      state.query = action.payload;
    },
    setAll(state, action) {
      return action.payload;
    },
  },
});

export const movieActions = movieSlice.actions;
export default movieSlice.reducer;
