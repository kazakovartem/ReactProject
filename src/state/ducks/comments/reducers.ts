import { createReducer } from '@reduxjs/toolkit';
import { addComment, dellComment, dellCommentCascade, updateComment } from './actions';
import { initialState } from './initialState';

const Comments = createReducer(initialState.comments, (builder) => {
    builder
        .addCase(addComment, (state, action) => {
            state.push(action.payload);
        })
        .addCase(dellComment, (state, action) => {
            return [...state.filter((comments) => comments.commentId !== action.payload.commentId)];
        })
        .addCase(dellCommentCascade, (state, action) => {
            return [...state.filter((comments) => comments.cardId !== action.payload.cardId)];
        })
        .addCase(updateComment, (state, action) => {
            const change = state.find((comments) => comments.commentId === action.payload.commentId);
            if (change) {
                change.description = action.payload.description;
            }
        });
});

export default Comments;
