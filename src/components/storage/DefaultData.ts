import {ICardList} from '../interface/interface';

export const boards : ICardList[] =     [
    {
        boardsHeader: 'TODO',
        cards: [
            {
                header: 'Product',
                description: '3 pending tasks to be picked by Raj.',
                comments: [
                    {
                        description: 'it\'s not right',
                        commentator: 'stas'
                    },
                    {
                        description: 'string1',
                        commentator: 'stas'
                    },
                ]
            },
            {
                header: 'Sales',
                description: 'Send proposal to Puneet for sales prices.',
                comments: [
                    {
                        description: 'string',
                        commentator: ''
                    },
                ]
            }
        ]

    },

    {
        boardsHeader: 'In Progress',
        cards: [
            {
                header: 'UAT Testing',
                description: 'Ask testing engg. to set up testing infrastructure.',
                comments: []
            }
        ]
    },

    {
        boardsHeader: 'Testing',
        cards: [
            {
                header: 'UAT Testing',
                description: 'Ask testing engg. to set up testing infrastructure.',
                comments: []
            }
        ]
    },

    {
        boardsHeader: 'Done',
        cards: [
            {
                header: 'UAT Testing',
                description: 'Ask testing engg. to set up testing infrastructure.',
                comments: [
                    {
                        description: 'all right',
                        commentator: 'sas'
                    },
                    {
                        description: 'check',
                        commentator: 'sas'
                    },
                    {
                        description: 'done',
                        commentator: 'sas'
                    },
                    {
                        description: 'well',
                        commentator: 'sas'
                    },
                ]
            }
        ]
    }
];