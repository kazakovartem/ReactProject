import { createAction } from '@reduxjs/toolkit';
import types from './types';
import { INewBoard, IDeleteBoard, IChangeBoardHead } from './types';

const addBoard = createAction<INewBoard>(types.ADD_BOARD);
const dellBoard = createAction<IDeleteBoard>(types.DELETE_BOARD);
const changeHeardBoard = createAction<IChangeBoardHead>(types.CHANGE_HEARD_BOARD);

export default {
    addBoard,
    dellBoard,
    changeHeardBoard,
};
