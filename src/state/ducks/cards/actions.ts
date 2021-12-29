import { createAction } from '@reduxjs/toolkit';
import types from './types';
import { INewCard, IDeleteCard, IDeleteCardCascade, IChangeCardHead, IChangeCardDescription } from './types';

const addCard = createAction<INewCard>(types.ADD_CARD);
const dellCard = createAction<IDeleteCard>(types.DELETE_CARD);
const dellCardCascade = createAction<IDeleteCardCascade>(types.DELETE_CARD_CASCADE);
const changeCardHead = createAction<IChangeCardHead>(types.CHANGE_CARD_HEAD);
const changeCardDescription = createAction<IChangeCardDescription>(types.CHANGE_CARD_DESCRIPTION);

export default {
    addCard,
    dellCard,
    dellCardCascade,
    changeCardHead,
    changeCardDescription,
};
