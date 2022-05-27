import { COMMENTS } from "../shared/comments";
import * as ActionsTypes from "./ActionTypes"

export const Comments = (state = { errMess: null, comments: [] }, action) => {
  switch (action.type) {
    case ActionsTypes.ADD_COMMENTS:
      return { ...state, errMess: null, comment: action.payload }
    case ActionsTypes.COMMENT_FAILED:
      return { ...state, errMess: action.payload }
    case ActionsTypes.ADD_COMMENT:
      let comment = action.payload

      return { ...state, comments: [...state, comment] }
    default:
      return state
  }
} 