import { PROMOTIONS } from "../shared/promotions";
import * as ActionsTypes from "./ActionTypes"

export const Promotions = (state = { isLoading: true, errMess: null, promotions: [] }, action) => {
  switch (action.type) {
    case ActionsTypes.ADD_PROMOS:
      return { ...state, isLoading: false, errMess: null, promotions: action.payload }
    case ActionsTypes.PROMOS_FAILED:
      return { ...state, isLoading: false, errMess: action.payload }
    case ActionsTypes.PROMOS_LOADING:
      return { ...state, isLoading: true, errMess: null, promotions: [] }
    default:
      return state
  }
}