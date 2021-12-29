import { ICommentsState, ICommentState } from './types';
import { createSelector } from 'reselect';

function getCommentsByCardId(id: string) {
    const getAllCards = (state: ICommentsState) => state.comments;
    const selectCommentsByCardId = createSelector([getAllCards], (state) => {
        return state.filter((comment: ICommentState) => comment.cardId === id);
    });
    return selectCommentsByCardId;
}

function getCommentsByBoardId(id: string) {
    const getAllCards = (state: ICommentsState) => state.comments;
    const selectCommentsByBoardId = createSelector([getAllCards], (state) => {
        return state.filter((comment: ICommentState) => comment.boardId === id);
    });
    return selectCommentsByBoardId;
}

function getCommentById(id: string) {
    const getAllComments = (state: ICommentsState) => state.comments;
    const selectCommentById = createSelector([getAllComments], (state) => {
        return state.find((comment: ICommentState) => comment.commentId === id);
    });
    return selectCommentById;
}

function getComments() {
    const getAllComments = (state: ICommentsState) => state.comments;
    const selectCards = createSelector([getAllComments], (state) => {
        return state;
    });
    return selectCards;
}

export default {
    getCommentsByCardId,
    getCommentsByBoardId,
    getCommentById,
    getComments,
};
