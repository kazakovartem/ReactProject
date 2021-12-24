export interface IRootState {
    nameUser: {
        userName: string;
    };
    boards: {
        boardsHeader: string;
        boardId: string;
    }[];
    cards: {
        cardId: string;
        header: string;
        description: string;
        boardId: string;
    }[];
    comments: {
        cardId: string;
        commentId: string;
        description: string;
        commentator: string;
    }[];
}

export const initialState: IRootState = {
    nameUser: {
        userName: 'Default user',
    },
    boards: [
        {
            boardsHeader: 'TODO_RED',
            boardId: '0',
        },
        {
            boardsHeader: 'In Progress_RED',
            boardId: '1',
        },
        {
            boardsHeader: 'Testing_RED',
            boardId: '2',
        },
        {
            boardsHeader: 'Done_RED',
            boardId: '3',
        },
    ],
    cards: [
        {
            cardId: '0',
            header: 'Product_RED',
            description: '3 pending tasks to be picked by Raj.RED',
            boardId: '0',
        },
        {
            cardId: '1',
            header: 'Sales_RED',
            description: 'Send proposal to Punnet for sales prices.RED',
            boardId: '0',
        },
        {
            cardId: '2',
            header: 'Room_RED',
            description: 's prices.RED',
            boardId: '2',
        },
    ],
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
