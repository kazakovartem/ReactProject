import { IBoardsState } from './types';

export const initialState: IBoardsState = {
    boards: [
        {
            boardsHeader: 'TODO',
            boardId: '0',
        },
        {
            boardsHeader: 'In Progress',
            boardId: '1',
        },
        {
            boardsHeader: 'Testing',
            boardId: '2',
        },
        {
            boardsHeader: 'Done',
            boardId: '3',
        },
    ],
};
