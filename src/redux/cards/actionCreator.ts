import { createAction } from '@reduxjs/toolkit';
import { ADD_CARD, DELETE_CARD, DELETE_CARD_CASCADE } from './actionConstant';

interface INewCard {
    cardId: string;
    header: string;
    description: string;
    boardId: string;
}

interface IDeleteCard {
    cardId: string;
    header: string;
    description: string;
    boardId: string;
}

interface IDeleteCardCascade {
    boardId: string;
}

export const addCard = createAction<INewCard>(ADD_CARD);
export const dellCard = createAction<IDeleteCard>(DELETE_CARD);
export const dellCardCascade = createAction<IDeleteCardCascade>(DELETE_CARD_CASCADE);
