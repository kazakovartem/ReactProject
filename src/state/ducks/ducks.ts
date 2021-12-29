import * as boards from './boards';
import * as cards from './cards';
import * as comments from './comments';
import * as user from './user';

export const actions = {
    boards: boards.boardsActions,
    cards: cards.cardsActions,
    comments: comments.commentsActions,
    user: user.userActions,
};

export const selectors = {
    boards: boards.boardsSelectors,
    cards: cards.cardsSelectors,
    comments: comments.commentsSelectors,
    user: user.userSelectors,
};
