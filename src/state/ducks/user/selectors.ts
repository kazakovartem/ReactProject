import { INameState } from './types';
import { createSelector } from 'reselect';

function getName() {
    const getAllCards = (state: INameState) => state.user;
    const selectCommentsByCardId = createSelector([getAllCards], (state) => {
        return state.userName;
    });
    return selectCommentsByCardId;
}

export default {
    getName,
};
