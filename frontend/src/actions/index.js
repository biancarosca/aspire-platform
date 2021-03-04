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
	addDeveloper
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
	addDeveloper
};

export default allActions;
