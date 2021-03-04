import { combineReducers } from "redux";
//reducers
import pickedRole from "./roleReducer";
import {education, work, portfolio, socialLinks} from "./signupReducer";

const rootReducer = combineReducers({pickedRole,education,work, portfolio, socialLinks });

export default rootReducer;
