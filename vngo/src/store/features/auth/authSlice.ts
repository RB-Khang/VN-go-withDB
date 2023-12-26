import { createSlice } from '@reduxjs/toolkit';

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
    extraReducers: (builder) => {},
});

export const { actions: authActions, reducer: authReducer } = AuthSlice;
