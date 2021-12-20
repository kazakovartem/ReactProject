import { actionTypes, userType, stateType } from './actionTypesUser';

export const initialState = {
    userName: 'Use Redux2',
};

export default function user(state = initialState, action: actionTypes): stateType {
    switch (action.type) {
        case userType.ADD_USER:
            return { ...state, userName: action.payload };
        case userType.SHOW_USER:
            return { ...state, userName: state.userName };

        default:
            return state;
    }
}
