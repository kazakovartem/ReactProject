export interface IComment {
    description: string;
    commentator: string;
}

export interface ICardState {
    indexBoard: number;
    index: number;
    head: string;
    description: string;
    comments: IComment[];
}

interface ICard {
    header: string;
    description: string;
    comments: IComment[];
}

export interface IBoardState {
    boardsHeader: string;
    boardId: string;
    cards: ICard[];
}

export interface ICardList {
    boardsHeader: string;
    boardId: string;
    cards: ICard[];
}
