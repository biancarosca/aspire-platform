import { combineReducers } from "redux";
//reducers
import pickedRole from "./roleReducer";
import {education, work, portfolio, socialLinks,user,avatar} from "./signupReducer";

const rootReducer = combineReducers({pickedRole,education,work, portfolio, socialLinks, user, avatar });

export default rootReducer;
