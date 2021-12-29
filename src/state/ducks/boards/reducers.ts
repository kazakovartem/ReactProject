import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';
import { initialState } from './initialState';

const Boards = createReducer(initialState.boards, (builder) => {
    builder
        .addCase(actions.default.addBoard, (state, action) => {
            state.push(action.payload);
        })
        .addCase(actions.default.dellBoard, (state, action) => {
            return [...state.filter((boards) => boards.boardId !== action.payload.boardId)];
        })
        .addCase(actions.default.changeHeardBoard, (state, action) => {
            const change = state.find((boards) => boards.boardId === action.payload.boardId);
            if (change) {
                change.boardsHeader = action.payload.boardsHeader;
            }
        });
});

export default Boards;
