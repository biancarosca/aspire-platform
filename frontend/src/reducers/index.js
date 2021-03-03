import { combineReducers } from "redux";
//reducers
import pickedRole from "./roleReducer";
import {education,activeSection} from "./signupReducer";

const rootReducer = combineReducers({pickedRole,education,activeSection });

export default rootReducer;
