import { createAction } from '@reduxjs/toolkit';
import { ADD_USER } from './actionConstant';

export const addUserName = createAction<string>(ADD_USER);
