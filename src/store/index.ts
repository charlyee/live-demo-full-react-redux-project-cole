import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { sessionReducer } from "./session/reducers";
import { taReducer } from "./teachingAssistants/reducers";
import { studentReducer } from "./students/reducers";

const rootReducer = combineReducers({
    session: sessionReducer,
    students: studentReducer,
    teachingAssistants: taReducer
})

export type RootState = ReturnType<typeof rootReducer>;

export default function configureStore() {
    const store = createStore(
        rootReducer,
        composeWithDevTools(
            applyMiddleware()
        )
    );

    return store;
}