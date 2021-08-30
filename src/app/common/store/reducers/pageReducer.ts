import { CHANGE_PAGE } from "@store/actions/actionPageTypes"

export const pageReducer = (state = {page: 0, itemsPerPage: 5}, action: any) => {
    switch (action.type) {
      case CHANGE_PAGE:
        return {...state,
          page: action.payload
        }
      default:
        return state
    }
  }