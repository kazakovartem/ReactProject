import { ICardsState } from './types';

export const initialState: ICardsState = {
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
};
