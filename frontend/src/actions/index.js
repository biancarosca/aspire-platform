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
	addDeveloper,
	addAvatar
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
	addDeveloper,
	addAvatar
};

export default allActions;
