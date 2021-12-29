import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';
import { initialState } from './initialState';

const Comments = createReducer(initialState.comments, (builder) => {
    builder
        .addCase(actions.default.addComment, (state, action) => {
            state.push(action.payload);
        })
        .addCase(actions.default.dellComment, (state, action) => {
            return [...state.filter((comments) => comments.commentId !== action.payload.commentId)];
        })
        .addCase(actions.default.dellCommentCascade, (state, action) => {
            return [...state.filter((comments) => comments.cardId !== action.payload.cardId)];
        })
        .addCase(actions.default.updateComment, (state, action) => {
            const change = state.find((comments) => comments.commentId === action.payload.commentId);
            if (change) {
                change.description = action.payload.description;
            }
        });
});

export default Comments;
