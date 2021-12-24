export interface INewComment {
    cardId: string;
    commentId: string;
    description: string;
    commentator: string;
}

export interface IDellComment {
    commentId: string;
}

export interface IDellCommentCascade {
    cardId: string;
}

export interface IUpdateComment {
    commentId: string;
    description: string;
}
