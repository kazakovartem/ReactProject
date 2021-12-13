import { ICardState } from '../interface/interface';

export interface ICardProps {
    valueStateRef: boolean;
    onSetValueStateRef: React.Dispatch<React.SetStateAction<boolean>>;
    active: boolean;
    onSetActive: React.Dispatch<React.SetStateAction<boolean>>;
    cardState: ICardState;
    setCardState: React.Dispatch<React.SetStateAction<ICardState>>;
    onCardHeard(cardHead: string, cardIndex: number, indexBoard: number): void;
    onCardDescription(cardDescription: string, cardIndex: number, indexBoard: number): void;
    nameOwner: string;
    onNewComment(commentDescription: string, nameOwner: string, cardIndex: number, indexBoard: number): void;
    onDellComment(commentIndex: number, indexCard: number, indexBoard: number): void;
    onChangeComment(commentDescription: string, commentIndex: number, indexCard: number, indexBoard: number): void;
}
