import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  loading: false,
  hasErrors: false,
  comic: [],
  characters: [],
  teams:[],
  locations:[],
  concepts:[]
}

// A slice for comics with our reducers
const comicSlice = createSlice({
  name: 'comic',
  initialState,
  reducers: {
    getComic: state => {
      state.loading = true
    },
    getComicSuccess: (state, { payload }) => {
      state.comic = payload
      state.loading = false
      state.hasErrors = false
    },
    getComicFailure: state => {
      state.loading = false
      state.hasErrors = true
    },
    setCharacters: (state, { payload }) => {
        state.characters = payload
    },
    setTeams: (state, { payload }) => {
        state.teams = payload
    },
    setLocations: (state, { payload }) => {
        state.locations = payload
    },
    setConcepts: (state, { payload }) => {
        state.concepts = payload
    }
  },
})

// Actions generated from the slice
export const { getComic, getComicSuccess, getComicFailure, setCharacters, setTeams, setLocations, setConcepts } = comicSlice.actions

// A selector

export const comicSelector = state => state.comic

// The reducer
export default comicSlice.reducer

// Asynchronous thunk action defined by the first argument

export function fetchComic(issue_number) {
  return async dispatch => {
    dispatch(getComic())
    try {
        //const proxyurl = "https://cors-anywhere.herokuapp.com/";
        //const proxyurl = "https://whispering-peak-56582.herokuapp.com/";
        const proxyurl = "https://lit-badlands-08756.herokuapp.com/"
        const response = await fetch(proxyurl+`https://comicvine.gamespot.com/api/issue/4000-${issue_number}/?api_key=ddfcbbcf1de93b6a1d5a31436359fa141c71d01c&format=json&field_list=image,character_credits,team_credits,location_credits,concept_credits`)
        const data = await response.json();
        dispatch(getComicSuccess(data.results))

        const mapCredits = (myArray) => {
            const promises = myArray.map(async (myValue) => {
                const resValue = await fetch(proxyurl+`${myValue.api_detail_url}?api_key=ddfcbbcf1de93b6a1d5a31436359fa141c71d01c&format=json&field_list=image,name`)
                const dataFromArray = await resValue.json();
                return dataFromArray.results
            });

            return Promise.all(promises);
        }

        await mapCredits(data.results.character_credits)
                                .then(characters=> dispatch(setCharacters(characters)))

        await mapCredits(data.results.team_credits)
                                .then(teams=> dispatch(setTeams(teams)))

        await mapCredits(data.results.location_credits)
            .then(locations=> dispatch(setLocations(locations)))

        await mapCredits(data.results.concept_credits)
            .then(concepts=> dispatch(setConcepts(concepts)))
        
    } catch (error) {
      dispatch(getComicFailure())
    }
  }
}
