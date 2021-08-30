import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import { pageReducer } from "./pageReducer";
import { todosReducer } from "./todosReducer";

export const reducer = combineReducers({
    todosState: todosReducer,
    filterState: filterReducer, 
    pageState: pageReducer,
  });