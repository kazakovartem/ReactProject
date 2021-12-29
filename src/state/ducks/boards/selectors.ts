import { IBoardsState } from './types';
import { IBoardState } from '../../../types/index';
import { createSelector } from 'reselect';

const getAllBoards = (state: IBoardsState) => state.boards;

function getBoardById(id: string) {
    return createSelector(getAllBoards, (state) => state.find((board: IBoardState) => board.boardId === id));
}

function getBoards() {
    return createSelector(getAllBoards, (state) => state);
}

export default {
    getBoards,
    getBoardById,
};
