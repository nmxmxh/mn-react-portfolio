import ProjectActionTypes from './projects.types';

export const selectProject = project => ({
    type: ProjectActionTypes.SELECT_PROJECT,
    payload: project
})