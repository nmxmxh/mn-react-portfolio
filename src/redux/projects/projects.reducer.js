import ProjectActionTypes from './projects.types';

import PROJECTS_DATA from './projects.data.js';

import { REHYDRATE }  from 'redux-persist/lib/constants'

const INITIAL_STATE = PROJECTS_DATA;

const projectsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ProjectActionTypes.FETCH_PROJECTS:
            return {
                ...state
            }

        case ProjectActionTypes.SELECT_PROJECT:
            return {
                ...state,
                selectedProject: state.projects.filter(
                    project => project.id === action.payload.id
                )
            }

        case REHYDRATE: 
            return {
                ...state
            }

        default:
            return state;
    }
}

export default projectsReducer;