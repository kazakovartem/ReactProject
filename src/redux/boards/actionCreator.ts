import { createAction } from '@reduxjs/toolkit';
import { ADD_BOARD, DELETE_BOARD, CHANGE_HEARD_BOARD } from './actionConstant';
import { INewBoard, IDeleteBoard, IChangeBoardHead } from './actionTypes';

export const addBoard = createAction<INewBoard>(ADD_BOARD);
export const dellBoard = createAction<IDeleteBoard>(DELETE_BOARD);
export const changeHeardBoard = createAction<IChangeBoardHead>(CHANGE_HEARD_BOARD);
