import { IBoardsState } from './types';
import { IBoardState } from '../../../types/index';
import { createSelector } from 'reselect';

function getBoardById(id: string) {
    const getAllBoards = (state: IBoardsState) => state.boards;
    const selectCardsByBoardId = createSelector([getAllBoards], (state) => {
        return state.find((board: IBoardState) => board.boardId === id);
    });
    return selectCardsByBoardId;
}

function getBoards() {
    const getAllBoards = (state: IBoardsState) => state.boards;
    const selectCardsByBoardId = createSelector([getAllBoards], (state) => {
        return state;
    });
    return selectCardsByBoardId;
}

export default {
    getBoards,
    getBoardById,
};
