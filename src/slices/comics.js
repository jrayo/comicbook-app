import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  loading: false,
  hasErrors: false,
  comics: [],
}

// A slice for comics with our three reducers
const comicsSlice = createSlice({
  name: 'comics',
  initialState,
  reducers: {
    getComics: state => {
      state.loading = true
    },
    getComicsSuccess: (state, { payload }) => {
      state.comics = payload
      state.loading = false
      state.hasErrors = false
    },
    getComicsFailure: state => {
      state.loading = false
      state.hasErrors = true
    },
  },
})

// Three actions generated from the slice
export const { getComics, getComicsSuccess, getComicsFailure } = comicsSlice.actions

// A selector
export const comicsSelector = state => state.comics

// The reducer
export default comicsSlice.reducer

// Asynchronous thunk action defined by the first argument
export function fetchComics() {
  return async dispatch => {
    dispatch(getComics())

    try {
      //const proxyurl = "https://cors-anywhere.herokuapp.com/";
      //const proxyurl = "https://whispering-peak-56582.herokuapp.com/";
      const proxyurl = "https://lit-badlands-08756.herokuapp.com/"
      
      const response = await fetch(proxyurl+'https://comicvine.gamespot.com/api/issues/?api_key=ddfcbbcf1de93b6a1d5a31436359fa141c71d01c&format=json&sort=date_added:desc&field_list=date_added,image,name,issue_number,volume,id')
      if (response.ok) {
        const data = await response.json();
        dispatch(getComicsSuccess(data.results))
      } else {
        throw new Error('Something went wrong');
      }
    } catch (error) {
      console.log(error.message)
      dispatch(getComicsFailure())
    }
  }
}