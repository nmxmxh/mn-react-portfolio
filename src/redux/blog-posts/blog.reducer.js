import BlogActionTypes from './blog.types';

import BLOG_DATA from './blog.data.js'

const INITIAL_STATE = BLOG_DATA;

const blogReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case BlogActionTypes.FETCH_BLOG:
            return {
                ...state
            }

        default:
            return state;
    }
}

export default blogReducer;