export interface ICommentState {
    cardId: string;
    commentId: string;
    description: string;
    commentator: string;
}

export interface ICardState {
    cardId: string;
    boardId: string;
    header: string;
    description: string;
}

export interface IBoardState {
    boardsHeader: string;
    boardId: string;
}

export interface IUserState {
    nameUser: {
        userName: string;
    };
}

export interface IRootState {
    boards: {
        boardsHeader: string;
        boardId: string;
    }[];
    cards: {
        cardId: string;
        header: string;
        description: string;
        boardId: string;
    }[];
    comments: {
        cardId: string;
        commentId: string;
        description: string;
        commentator: string;
    }[];
    nameUser: {
        userName: string;
    };
}
