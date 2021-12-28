import { addUserName } from './user/actions';
import { addBoard, dellBoard, changeHeardBoard } from './boards/actions';
import { addCard, dellCard, dellCardCascade, changeCardHead, changeCardDescription } from './cards/actions';
import { addComment, dellComment, dellCommentCascade, updateComment } from './comments/actions';

export const allActionCreators = {
    addUserName,
    addBoard,
    dellBoard,
    changeHeardBoard,
    addCard,
    dellCard,
    dellCardCascade,
    changeCardHead,
    changeCardDescription,
    addComment,
    dellComment,
    dellCommentCascade,
    updateComment,
};
