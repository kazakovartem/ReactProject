import { createAction } from '@reduxjs/toolkit';
import { ADD_COMMENT, DELETE_COMMENT, DELETE_COMMENT_CASCADE, UPDATE_COMMENT } from './actionConstant';
import { INewComment, IDellComment, IDellCommentCascade, IUpdateComment } from './actionTypes';

export const addComment = createAction<INewComment>(ADD_COMMENT);
export const dellComment = createAction<IDellComment>(DELETE_COMMENT);
export const dellCommentCascade = createAction<IDellCommentCascade>(DELETE_COMMENT_CASCADE);
export const updateComment = createAction<IUpdateComment>(UPDATE_COMMENT);
