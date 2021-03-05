import { combineReducers } from "redux";
//reducers
import pickedRole from "./roleReducer";
import {education, work, portfolio, socialLinks,developer,avatar} from "./signupReducer";

const rootReducer = combineReducers({pickedRole,education,work, portfolio, socialLinks, developer, avatar });

export default rootReducer;
