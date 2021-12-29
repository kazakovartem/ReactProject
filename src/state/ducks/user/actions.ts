import { createAction } from '@reduxjs/toolkit';
import types from './types';

const addUserName = createAction<string>(types.ADD_USER);

export default {
    addUserName,
};
