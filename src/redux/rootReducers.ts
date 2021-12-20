import { combineReducers, configureStore } from '@reduxjs/toolkit';
import reducersUser from './user/reducersUser';
import reducersBoards from './boards/reducersBoards';

const rootReducer = combineReducers({
    nameUser: reducersUser,
    boards: reducersBoards,
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
