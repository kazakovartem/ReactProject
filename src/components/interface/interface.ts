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
    comments: IComment[];
}

interface ICard {
    header: string;
    description: string;
    cardId: string;
    comments: IComment[];
}

export interface IBoardState {
    boardsHeader: string;
    boardId: string;
    cards?: ICard[];
}

export interface ICardList {
    boardsHeader: string;
    boardId: string;
    cards: ICard[];
}
