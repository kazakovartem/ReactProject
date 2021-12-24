export interface IComment {
    cardId: string;
    commentId: string;
    description: string;
    commentator: string;
}

export interface ICardState {
    cardId: string;
    boardId: string;
    head: string;
    description: string;
}

export interface IBoardState {
    boardsHeader: string;
    boardId: string;
}
