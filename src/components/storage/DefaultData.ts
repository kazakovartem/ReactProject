import { ICardList } from '../interface/interface';

export const DefaultData: ICardList[] = [
    {
        boardsHeader: 'TODO',
        boardId: 0,
        cards: [
            {
                header: 'Product',
                description: '3 pending tasks to be picked by Raj.',
                comments: [
                    {
                        description: "it's not right",
                        commentator: 'Stas',
                    },
                    {
                        description: 'string1',
                        commentator: 'stas',
                    },
                ],
            },
            {
                header: 'Sales',
                description: 'Send proposal to Punnet for sales prices.',
                comments: [
                    {
                        description: 'string',
                        commentator: '',
                    },
                ],
            },
        ],
    },

    {
        boardsHeader: 'In Progress',
        boardId: 1,
        cards: [
            {
                header: 'UAT Testing',
                description: 'Ask testing eng. to set up testing infrastructure.',
                comments: [],
            },
        ],
    },

    {
        boardsHeader: 'Testing',
        boardId: 2,
        cards: [
            {
                header: 'UAT Testing',
                description: 'Ask testing eng. to set up testing infrastructure.',
                comments: [],
            },
        ],
    },

    {
        boardsHeader: 'Done',
        boardId: 4,
        cards: [
            {
                header: 'UAT Testing',
                description: 'Ask testing eng. to set up testing infrastructure.',
                comments: [
                    {
                        description: 'all right',
                        commentator: 'sas',
                    },
                    {
                        description: 'check',
                        commentator: 'sas',
                    },
                    {
                        description: 'done',
                        commentator: 'sas',
                    },
                    {
                        description: 'well',
                        commentator: 'sas',
                    },
                ],
            },
        ],
    },
];
