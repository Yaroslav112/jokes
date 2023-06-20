import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// @ts-ignore
import logger from 'redux-logger';
import jokesReducer from './JokeSlice';

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
    reducer: {
        jokes: jokesReducer,
    },
    middleware,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
