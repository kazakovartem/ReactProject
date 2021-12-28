export const ADD_CARD = 'ADD_CARD';
export const DELETE_CARD = 'DELETE_CARD';
export const DELETE_CARD_CASCADE = 'DELETE_CARD_CASCADE';
export const CHANGE_CARD_HEAD = 'CHANGE_CARD_HEAD';
export const CHANGE_CARD_DESCRIPTION = 'CHANGE_CARD_DESCRIPTION';

export default {
    ADD_CARD,
    DELETE_CARD,
    DELETE_CARD_CASCADE,
    CHANGE_CARD_HEAD,
    CHANGE_CARD_DESCRIPTION,
};

export interface INewCard {
    cardId: string;
    header: string;
    description: string;
    boardId: string;
}

export interface IDeleteCard {
    cardId: string;
}

export interface IDeleteCardCascade {
    boardId: string;
}

export interface IChangeCardHead {
    cardId: string;
    header: string;
}

export interface IChangeCardDescription {
    cardId: string;
    description: string;
}

export interface ICardsState {
    cards: {
        cardId: string;
        header: string;
        description: string;
        boardId: string;
    }[];
}
