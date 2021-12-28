import { createAction } from '@reduxjs/toolkit';
import types from './types';
import { INewBoard, IDeleteBoard, IChangeBoardHead } from './types';

export const addBoard = createAction<INewBoard>(types.ADD_BOARD);
export const dellBoard = createAction<IDeleteBoard>(types.DELETE_BOARD);
export const changeHeardBoard = createAction<IChangeBoardHead>(types.CHANGE_HEARD_BOARD);
