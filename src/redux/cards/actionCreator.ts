import { createAction } from '@reduxjs/toolkit';
import {
    ADD_CARD,
    DELETE_CARD,
    DELETE_CARD_CASCADE,
    CHANGE_CARD_HEAD,
    CHANGE_CARD_DESCRIPTION,
} from './actionConstant';
import { INewCard, IDeleteCard, IDeleteCardCascade, IChangeCardHead, IChangeCardDescription } from './actionTypes';

export const addCard = createAction<INewCard>(ADD_CARD);
export const dellCard = createAction<IDeleteCard>(DELETE_CARD);
export const dellCardCascade = createAction<IDeleteCardCascade>(DELETE_CARD_CASCADE);
export const changeCardHead = createAction<IChangeCardHead>(CHANGE_CARD_HEAD);
export const changeCardDescription = createAction<IChangeCardDescription>(CHANGE_CARD_DESCRIPTION);
