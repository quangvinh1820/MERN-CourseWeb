import { 
    loginStart, 
    loginSuccess, 
    loginFailure,
    registerStart,
    registerSuccess,
    registerFailure,
    logout,
} from "./userRedux";

import {
    dataStart, 
    dataSuccess, 
    dataFailure } from "./coursesRedux";

import { publicRequest } from "../requestMethod";

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
};

export const register = async (dispatch, user) => {
    dispatch(registerStart());
    try {
        const res = await publicRequest.post("/auth/register", user);
        dispatch(registerSuccess(res.data));
    } catch (err) {
        dispatch(registerFailure());
    }
};

export const exitLgout = (dispatch) => {
    dispatch(logout())
};

// Create Course
export const create = async (dispatch, courses) => {
    dispatch(dataStart());
    try {
        const res = await publicRequest.post("/courses/", courses);
        dispatch(dataSuccess(res.data));
    } catch (err) {
        dispatch(dataFailure());
    }
};
