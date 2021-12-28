import { ICommentsState } from './types';

export const initialState: ICommentsState = {
    comments: [
        {
            cardId: '2',
            commentId: '0',
            description: 'Good job_RED',
            commentator: 'sasRED',
        },
        {
            cardId: '0',
            commentId: '1',
            description: 'Best job_RED',
            commentator: 'sTasRED',
        },
    ],
};