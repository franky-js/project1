import {createStore} from "redux";
import {reducer} from "./loginReducer";

export const store = createStore(reducer)