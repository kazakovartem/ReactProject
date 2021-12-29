import { createAction } from '@reduxjs/toolkit';
import types from './types';
import { INewComment, IDellComment, IDellCommentCascade, IUpdateComment } from './types';

const addComment = createAction<INewComment>(types.ADD_COMMENT);
const dellComment = createAction<IDellComment>(types.DELETE_COMMENT);
const dellCommentCascade = createAction<IDellCommentCascade>(types.DELETE_COMMENT_CASCADE);
const updateComment = createAction<IUpdateComment>(types.UPDATE_COMMENT);

export default {
    addComment,
    dellComment,
    dellCommentCascade,
    updateComment,
};
