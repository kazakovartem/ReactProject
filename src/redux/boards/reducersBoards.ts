import types from './actionTypesBoards';

export const initialState = {
    userName: 'Use Redux',
};
enum userType {
    ADD_BOARD = 'ADD_BOARD',
}

export default function Board(state = initialState, action: { type: userType; userName: string }) {
    switch (action.type) {
        case types.ADD_BOARD:
            console.log(action);
            return { ...state, userName: action.userName };

        default:
            return state;
    }
}
