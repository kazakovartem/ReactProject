import { addUserName } from './user/actionCreator';
import { addBoard, dellBoard, changeHeardBoard } from './boards/actionCreator';
import { addCard, dellCard, dellCardCascade } from './cards/actionCreator';

export const allActionCreators = {
    addUserName,
    addBoard,
    dellBoard,
    changeHeardBoard,
    addCard,
    dellCard,
    dellCardCascade,
};
