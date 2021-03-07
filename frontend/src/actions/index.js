import pickRole from "./roleAction";
import {
	addEducation,
	addWork,
	addProject,
	addLink,
	deleteGroupEduc,
	deleteGroupWork,
	deleteGroupProjects,
	deleteGroupLinks,
	addUser,
	addAvatar,
} from "./signupAction";
import { setLogin } from "./loginAction";

const allActions = {
	pickRole,
	addEducation,
	addWork,
	addProject,
	addLink,
	deleteGroupEduc,
	deleteGroupWork,
	deleteGroupProjects,
	deleteGroupLinks,
	addUser,
	addAvatar,
	setLogin,
};

export default allActions;
