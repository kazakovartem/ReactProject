import { ICommentsState, ICommentState } from './types';
import { createSelector } from 'reselect';

const getAllComments = (state: ICommentsState) => state.comments;

function getCommentsByCardId(id: string) {
    return createSelector(getAllComments, (state) => state.filter((comment: ICommentState) => comment.cardId === id));
}

function getCommentsByBoardId(id: string) {
    return createSelector(getAllComments, (state) => state.filter((comment: ICommentState) => comment.boardId === id));
}

function getCommentById(id: string) {
    return createSelector(getAllComments, (state) =>
        state.filter((comment: ICommentState) => comment.commentId === id),
    );
}

function getComments() {
    return createSelector(getAllComments, (state) => state);
}

export default {
    getCommentsByCardId,
    getCommentsByBoardId,
    getCommentById,
    getComments,
};
