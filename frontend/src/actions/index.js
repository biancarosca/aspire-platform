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
	toggleLogin
} from "./signupAction";

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
	toggleLogin
};

export default allActions;
