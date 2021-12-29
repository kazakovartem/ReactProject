import { INameState } from './types';
import { createSelector } from 'reselect';

const getUser = (state: INameState) => state.user;

function getName() {
    return createSelector(getUser, (state) => state.userName);
}

export default {
    getName,
};
