import { counter } from "@fortawesome/fontawesome-svg-core";
import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  movies: [],
  counter: 0
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: INITIAL_STATE,
  reducers: {
    addMovie: (state, action) => {
      const movie = action.payload;
      state.movies.push(movie);
      state.counter++;
    },
    removeMovie: (state, action) => {
      const movieId = action.payload.id;
      state.movies = state.movies.filter((movie) => movie.id !== movieId);
      state.counter--;
    },
  },
});

export const { addMovie, removeMovie } = wishlistSlice.actions;
export default wishlistSlice.reducer;