import { combineReducers } from "redux";
//reducers
import pickedRole from "./roleReducer";
import {education, work, portfolio, socialLinks,user,avatar} from "./signupReducer";
import { isLoggedIn } from "./loginReducer";

const rootReducer = combineReducers({pickedRole,education,work, portfolio, socialLinks, user, avatar, isLoggedIn });

export default rootReducer;
