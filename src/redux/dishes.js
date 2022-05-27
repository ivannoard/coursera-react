import { DISHES } from "../shared/dishes";
import * as ActionsTypes from "./ActionTypes"
export const Dishes = (state = { isLoading: true, err: null, dishes: [] }, action) => {

  switch (action.type) {
    case ActionsTypes.DISHES_LOADING:
      return { isLoading: true, err: null, dishes: [] }
    case ActionsTypes.DISHES_FAILED:
      return { isLoading: false, err: action.payload }
    case ActionsTypes.ADD_DISHES:
      const concat = { ...state, isLoading: false, err: null, dishes: action.payload }
      return concat
    default:
      return state
  }
}