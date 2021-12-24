export interface INewCard {
    cardId: string;
    header: string;
    description: string;
    boardId: string;
}

export interface IDeleteCard {
    cardId: string;
}

export interface IDeleteCardCascade {
    boardId: string;
}

export interface IChangeCardHead {
    cardId: string;
    header: string;
}

export interface IChangeCardDescription {
    cardId: string;
    description: string;
}
