import {  createSlice } from '@reduxjs/toolkit';
import { testThunk } from './testThunk';

type initialStateType = {
    test: number;
};

const initialState: initialStateType = {
    test: 0,
};
export const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(testThunk.fulfilled, (state, { payload }) => {
            state.test += payload;
        });
    },
});

export const { actions: authActions, reducer: authReducer } = AuthSlice;
