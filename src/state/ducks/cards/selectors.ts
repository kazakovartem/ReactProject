import { ICardsState } from './types';
import { ICardState } from '../../../types/index';
import { createSelector } from 'reselect';

const getAllCards = (state: ICardsState) => state.cards;

function getCardsByBoardId(id: string) {
    return createSelector(getAllCards, (state) => state.filter((card: ICardState) => card.boardId === id));
}

function getCardById(id: string) {
    return createSelector(getAllCards, (state) => state.find((card: ICardState) => card.cardId === id));
}

function getCards() {
    return createSelector(getAllCards, (state) => state);
}

export default {
    getCards,
    getCardsByBoardId,
    getCardById,
};
