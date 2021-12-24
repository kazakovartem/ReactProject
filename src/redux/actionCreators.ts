import { addUserName } from './user/actionCreator';
import { addBoard, dellBoard, changeHeardBoard } from './boards/actionCreator';
import { addCard, dellCard, dellCardCascade, changeCardHead, changeCardDescription } from './cards/actionCreator';
import { addComment, dellComment, dellCommentCascade, updateComment } from './comments/actionCreator';

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
