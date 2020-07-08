import { combineReducers } from 'redux'

import comicsReducer from './comics'
import comicReducer from './comic'

const rootReducer = combineReducers({
  comics: comicsReducer,
  comic: comicReducer
})

export default rootReducer