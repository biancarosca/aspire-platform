import { combineReducers } from "redux";
//reducers
import pickedRole from "./roleReducer";
import {education, work} from "./signupReducer";

const rootReducer = combineReducers({pickedRole,education,work });

export default rootReducer;
