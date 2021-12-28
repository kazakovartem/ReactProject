export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const DELETE_COMMENT_CASCADE = 'DELETE_COMMENT_CASCADE';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';

export default {
    ADD_COMMENT,
    DELETE_COMMENT,
    DELETE_COMMENT_CASCADE,
    UPDATE_COMMENT,
};

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

export interface ICommentsState {
    comments: {
        cardId: string;
        commentId: string;
        description: string;
        commentator: string;
    }[];
}
