import { createAction } from '@reduxjs/toolkit';
import { ADD_BOARD } from './actionConstant';

export const addBoard = createAction<string>(ADD_BOARD);
