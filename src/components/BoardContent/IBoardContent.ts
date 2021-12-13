import { IBoardState, IComment } from '../interface/interface';

export interface IBoardContent {
    nameOwner: string;
    boardState: IBoardState;
    index: number;
    onShowCardForm(
        indexBoard: number,
        indexCard: number,
        header: string,
        description: string,
        comments: IComment[],
    ): void;
    onDeleteCard(indexBoard: number, indexCard: number): void;
    onAddNewCard(boardIndex: number, value: string): void;
    onBoardHeard(boardHead: string, boardIndex: number): void;
    onDeleteBoard(boardIndex: number): void;
}
