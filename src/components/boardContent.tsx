import React, { useRef,useState } from 'react';

interface IComment{
    description: string;
    commentator: string;
}

interface ICard {
    header: string;
    description: string;
    comments: IComment[];
}

interface IBoardState{
    boardsHeader: string,
    cards: ICard [];

}

interface IBoardContent{
    nameOwner:string;
    boardState:IBoardState;
    setBoardState:React.Dispatch<React.SetStateAction<IBoardState>>;
    index : number,
    showCardForm(indexBoard:number ,indexCard:number,header:string,description:string,comments:IComment[]):void;
    deleteCard(indexBoard:number,indexCard:number):void;
    addNewCard(boardIndex:number,value:string):void;
    boardHeard(boardHead:string,boardIndex:number):void;
    deletBoard(boardIndex:number):void;
}


export const BoardContent: React.FC<IBoardContent> = props=>{
    const ref = useRef<HTMLInputElement>(null);
    const refNewCard = useRef<HTMLInputElement>(null);
    const [activeAddF, setActiveAddF] = useState(false);

    const keyPress=()=>{
        props.boardHeard(ref.current!.value,props.index);
    }
    
    const openCard=(indexCard:number,header:string,comments:IComment[],indexBoard:number,description:string)=>{
        props.showCardForm(indexBoard,indexCard,header,description,comments);
    }

    const deleteCard=(e:any,boardIndex:number,cardIndex:number)=>{
        e.stopPropagation();
        props.deleteCard(boardIndex,cardIndex);
    }

    const NewCard=(e:any,indexBoard:number)=>{
        e.stopPropagation();
        if(refNewCard.current!.value !== ''){
            props.addNewCard(indexBoard,refNewCard.current!.value);
            refNewCard.current!.value = '';
            setActiveAddF(false);
        }else{
            setActiveAddF(false);
        }
        
    }

    const ShowAddCardForm=()=>{
        setActiveAddF(true);
    }

    const deleteBoad=(indexBoard:number)=>{
        props.deletBoard(indexBoard);
    }

    return(
        <div className='board' key={props.index} >
            <div className='board-head' >
                <input 
                key={props.index}
                className='board-headText' 
                name = 'boardHeard'
                id = {'boardHeard'+ (props.index) }                
                type="text"
                defaultValue = {props.boardState.boardsHeader}
                ref = {ref}
                onInput={keyPress}
                />
                <button className='deleteBoardButton' onClick={()=>deleteBoad(props.index)} ></button>
            </div>
            <div className='board-body'>
                { props.boardState.cards.map((card, cardIndex) =>{ 
                    return( 
                        <div className='card' key={cardIndex} onClick={()=>openCard(cardIndex,card.header,card.comments,props.index,card.description)} >
                            <div className='card-head'>{card.header} 
                            <button className='deleteCard' onClick={(e)=>deleteCard(e,props.index,cardIndex)} ></button> </div>
                            <br />
                            <div className='card-body'>Comments: {card.comments.length}</div>
                            
                        </div>
                    )
                })}
                <div className="card addCard " onClick={ShowAddCardForm} >
                    <span  className={activeAddF ? "deactive" : ""} >Add new card</span>
                    <div className={activeAddF ? "" : "deactive"}>
                        <input  className='newCard' type="text" ref={refNewCard} />
                        <button className='addCardButton' onClick={(e)=>NewCard(e,props.index)} ></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
///