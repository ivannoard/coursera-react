import * as ActionTypes from './ActionTypes'
import { DISHES } from "../shared/dishes";
import { baseUrl } from '../shared/baseUrl'

export const addComment = (comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: comment
})
export const addFeedback = (feedback) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: feedback
})
export const postFeedback = (firstname, lastname, telnum, email, agree, contactType, message, date) => (dispatch) => {
  const newFeedback = {
    firstname: firstname,
    lastname: lastname,
    telnum: telnum,
    email: email,
    agree: agree,
    contactType: contactType,
    message: message,
    date: date
  }
  return fetch(baseUrl + 'feedback', {
    method: 'POST',
    body: JSON.stringify(newFeedback),
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'same-origin'
  })
    .then(res => {
      if (res.ok) {
        return res
      } else {
        var error = new Error(`Error ${res.status}: ${res.statusText}`)
        error.res = res
        return error
      }
    },
      error => {
        var errmess = new Error(error.message)
        throw errmess
      }
    )
    .then(response => response.json())
    .then(response => dispatch(addFeedback(response)))
    .catch(error => dispatch(feedbackFailed(error.message)))
}
export const feedbackFailed = (errMess) => ({
  type: ActionTypes.FEEDBACK_FAILED,
  payload: errMess
})
export const postComment = (dishId, rating, author, comment) => (dispatch) => {
  const newComment = {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment
  }
  newComment.date = new Date().toISOString()

  return fetch(baseUrl + 'comments', {
    method: 'POST',
    body: JSON.stringify(newComment),
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'same-origin'
  })
    .then(res => {
      if (res.ok) {
        return res
      } else {
        var error = new Error(`Error ${res.status}: ${res.statusText}`)
        error.res = res
        return error
      }
    },
      error => {
        var errmess = new Error(error.message)
        throw errmess
      }
    )
    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error => dispatch(dishesFailed(error.message)))
}

export const fetchDishes = () => (dispatch) => {
  dispatch(dishesLoading(true))
  return fetch(baseUrl + 'dishes')
    .then(res => {
      if (res.ok) {
        return res
      } else {
        var error = new Error(`Error ${res.status}: ${res.statusText}`)
        error.res = res
        return error
      }
    },
      error => {
        var errmess = new Error(error.message)
        throw errmess
      }
    )
    .then(res => res.json())
    .then(dishes => dispatch(addDishes(dishes)))
    .catch(error => dispatch(dishesFailed(error.message)))
  // setTimeout(() => {
  //   dispatch(addDishes(DISHES))
  // }, 1000)
}
export const dishesLoading = () => ({
  type: ActionTypes.DISHES_LOADING
})
export const dishesFailed = (errmess) => ({
  type: ActionTypes.DISHES_FAILED,
  payload: errmess
})
export const addDishes = (dishes) => ({
  type: ActionTypes.ADD_DISHES,
  payload: dishes
})

// comments
export const addComments = (comments) => ({
  type: ActionTypes.ADD_COMMENTS,
  payload: comments
})
export const commentsFailed = (errmess) => ({
  type: ActionTypes.COMMENT_FAILED,
  payload: errmess
})
export const fetchComments = () => (dispatch) => {
  return fetch(baseUrl + 'comments')
    .then(res => {
      if (res.ok) {
        return res
      } else {
        var error = new Error(`Error ${res.status}: ${res.statusText}`)
        error.res = res
        return error
      }
    },
      error => {
        var errmess = new Error(error.message)
        throw errmess
      }
    )
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(dishesFailed(error.message)))
}

// promos
export const addPromos = (promos) => ({
  type: ActionTypes.ADD_PROMOS,
  payload: promos
})
export const promosFailed = (errmess) => ({
  type: ActionTypes.PROMOS_FAILED,
  payload: errmess
})
export const promosLoading = () => ({
  type: ActionTypes.PROMOS_LOADING
})
export const fetchPromos = () => (dispatch) => {
  return fetch(baseUrl + 'promotions')
    .then(res => {
      if (res.ok) {
        return res
      } else {
        var error = new Error(`Error ${res.status}: ${res.statusText}`)
        error.res = res
        return error
      }
    },
      error => {
        var errmess = new Error(error.message)
        throw errmess
      }
    )
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)))
    .catch(error => dispatch(dishesFailed(error.message)))
}

// leaders
export const addLeaders = (leaders) => ({
  type: ActionTypes.ADD_LEADERS,
  payload: leaders
})
export const leadersLoading = () => ({
  type: ActionTypes.LEADERS_LOADING
})
export const leadersFailed = (errMess) => ({
  type: ActionTypes.LEADERS_FAILED,
  payload: errMess
})
export const fetchLeaders = () => (dispatch) => {
  return fetch(baseUrl + 'leaders')
    .then(res => {
      if (res.ok) {
        return res
      } else {
        var error = new Error(`Error ${res.status}: ${res.statusText}`)
        error.res = res
        return error
      }
    },
      error => {
        var errmess = new Error(error.message)
        throw errmess
      }
    )
    .then(response => response.json())
    .then(leaders => dispatch(addLeaders(leaders)))
    .catch(error => dispatch(leadersFailed(error.message)))
}