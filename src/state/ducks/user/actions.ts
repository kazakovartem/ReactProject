import { createAction } from '@reduxjs/toolkit';
import types from './types';

export const addUserName = createAction<string>(types.ADD_USER);
