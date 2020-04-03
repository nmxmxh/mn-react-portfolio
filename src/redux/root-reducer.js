import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import projectsReducer from './projects/projects.reducer';
import blogReducer from './blog-posts/blog.reducer';

const persistConfig = {
    key: 'root',
    storage
}

const rootReducer = combineReducers({
    projects: projectsReducer,
    blog: blogReducer
});

export default persistReducer(persistConfig, rootReducer);