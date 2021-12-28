export const ADD_BOARD = 'ADD_BOARD';
export const DELETE_BOARD = 'DELETE_BOARD';
export const CHANGE_HEARD_BOARD = 'CHANGE_HEARD_BOARD';

export default {
    ADD_BOARD,
    DELETE_BOARD,
    CHANGE_HEARD_BOARD,
};

export interface INewBoard {
    boardsHeader: string;
    boardId: string;
}

export interface IDeleteBoard {
    boardId: string;
}

export interface IChangeBoardHead {
    boardsHeader: string;
    boardId: string;
}

export interface IBoardsState {
    boards: {
        boardsHeader: string;
        boardId: string;
    }[];
}