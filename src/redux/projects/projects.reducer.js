import ProjectActionTypes from './projects.types';

import PROJECTS_DATA from './projects.data.js'

const INITIAL_STATE = PROJECTS_DATA;

const projectsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ProjectActionTypes.FETCH_PROJECTS:
            return {
                ...state
            }

        default:
            return state;
    }
}

export default projectsReducer;