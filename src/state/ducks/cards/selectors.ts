import { ICardsState } from './types';
import { ICardState } from '../../../types/index';
import { createSelector } from 'reselect';

function getCardsByBoardId(id: string) {
    const getAllCards = (state: ICardsState) => state.cards;
    const selectCardsByBoardId = createSelector([getAllCards], (state) => {
        return state.filter((card: ICardState) => card.boardId === id);
    });
    return selectCardsByBoardId;
}

function getCardById(id: string) {
    const getAllCards = (state: ICardsState) => state.cards;
    const selectCardsByBoardId = createSelector([getAllCards], (state) => {
        return state.find((card: ICardState) => card.cardId === id);
    });
    return selectCardsByBoardId;
}

function getCards() {
    const getAllCards = (state: ICardsState) => state.cards;
    const selectCards = createSelector([getAllCards], (state) => {
        return state;
    });
    return selectCards;
}

export default {
    getCards,
    getCardsByBoardId,
    getCardById,
};
