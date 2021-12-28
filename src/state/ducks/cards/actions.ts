import { createAction } from '@reduxjs/toolkit';
import types from './types';
import { INewCard, IDeleteCard, IDeleteCardCascade, IChangeCardHead, IChangeCardDescription } from './types';

export const addCard = createAction<INewCard>(types.ADD_CARD);
export const dellCard = createAction<IDeleteCard>(types.DELETE_CARD);
export const dellCardCascade = createAction<IDeleteCardCascade>(types.DELETE_CARD_CASCADE);
export const changeCardHead = createAction<IChangeCardHead>(types.CHANGE_CARD_HEAD);
export const changeCardDescription = createAction<IChangeCardDescription>(types.CHANGE_CARD_DESCRIPTION);
