import { createAction } from '@reduxjs/toolkit';
import { ADD_BOARD } from './actionConstant';

interface newBoard {
    boardsHeader: string;
    boardId: string;
}

export const addBoard = createAction<newBoard>(ADD_BOARD);
