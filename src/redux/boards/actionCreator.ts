import { createAction } from '@reduxjs/toolkit';
import { ADD_BOARD, DELETE_BOARD, CHANGE_HEARD_BOARD } from './actionConstant';

interface INewBoard {
    boardsHeader: string;
    boardId: string;
}

interface IDeleteBoard {
    boardsHeader: string;
    boardId: string;
}

export const addBoard = createAction<INewBoard>(ADD_BOARD);
export const dellBoard = createAction<IDeleteBoard>(DELETE_BOARD);
export const changeHeardBoard = createAction<IDeleteBoard>(CHANGE_HEARD_BOARD);
