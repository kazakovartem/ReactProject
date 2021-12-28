import { createAction } from '@reduxjs/toolkit';
import types from './types';
import { INewComment, IDellComment, IDellCommentCascade, IUpdateComment } from './types';

export const addComment = createAction<INewComment>(types.ADD_COMMENT);
export const dellComment = createAction<IDellComment>(types.DELETE_COMMENT);
export const dellCommentCascade = createAction<IDellCommentCascade>(types.DELETE_COMMENT_CASCADE);
export const updateComment = createAction<IUpdateComment>(types.UPDATE_COMMENT);
