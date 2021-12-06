
export interface IComment{
    description: string;
    commentator: string;
}

export interface ICardState{
    indexBoard: number,
    index : number,
    head: string,
    description: string,
    comments: IComment[];

}

interface ICard{
    header: string;
    description: string;
    comments: IComment[];
}

export interface IBoardState{
    boardsHeader: string,
    cards: ICard[];

}

export interface ICardList {
    boardsHeader: string;
    cards: ICard[];
}

export interface INameUserProps{
    onAdd(title: string): void;
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;

}

export interface IBoardProps{
    nameOwner: string;
    setNameOwner:React.Dispatch<React.SetStateAction<string>>;
}

export interface ICommentProps{
    vlueCommentRef: boolean;
    setVlueCommentRef: React.Dispatch<React.SetStateAction<boolean>>;
    commentState:IComment;
    commentIndex:number;
    dellComment(commentIndex:number):void;
    changeComment(commentDescription:string,commentIndex:number):void;
}

export interface ICoardProps{

    vlueStateRef: boolean;
    setVlueStateRef: React.Dispatch<React.SetStateAction<boolean>>;
    active:boolean;
    setActive : React.Dispatch<React.SetStateAction<boolean>>;
    cardState:ICardState;
    setCardState:React.Dispatch<React.SetStateAction<ICardState>>;
    cardHeard(cardHead:string,cardIndex:number,indexBoard:number):void;
    cardDescryption(cardDescryption:string,cardIndex:number,indexBoard:number):void;
    nameOwner:string;
    newComment(commentDescription:string,nameOwner:string,cardIndex:number,indexBoard:number):void;
    dellComment(commentIndex:number,indexCard:number,indexBoard:number):void;
    changeComment(commentDescription:string,commentIndex:number,indexCard:number,indexBoard:number):void;
}

export interface IBoardContent{
    nameOwner: string;
    boardState: IBoardState;
    setBoardState: React.Dispatch<React.SetStateAction<IBoardState>>;
    index: number,
    showCardForm(indexBoard:number ,indexCard:number,header:string,description:string,comments:IComment[]):void;
    deleteCard(indexBoard:number,indexCard:number):void;
    addNewCard(boardIndex:number,value:string):void;
    boardHeard(boardHead:string,boardIndex:number):void;
    deletBoard(boardIndex:number):void;
}