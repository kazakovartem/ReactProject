import React, { useRef,useState }  from 'react';
import {Card} from './card';
import {BoardContent} from './boardContent';

interface BoardInt{
    nameOwner:string;
    setNameOwner:React.Dispatch<React.SetStateAction<string>>;
}

interface IComment{
    description: string;
    commentator: string;
}

interface ICard {
    header: string;
    description: string;
    comments: IComment[];
}

interface ICardList {
    boardsHeader: string;
    cards: ICard[];
}


const boards : ICardList[] =     [
    {
        boardsHeader: 'TODO',
        cards: [
            {
                header: 'Product',
                description: '3 pending tasks to be picked by Raj.',
                comments: [
                    {
                        description: 'it\'s not right',
                        commentator:'stas'
                    },
                    {
                        description: 'string1',
                        commentator:'stas'
                    },
                ]
            },
            {
                header: 'Sales',
                description: 'Send proposal to Puneet for sales prices.',
                comments: [
                    {
                        description: 'string',
                        commentator:''
                    },
                ]
            }
        ]

    },

    {
        boardsHeader: 'In Progress',
        cards: [
            {
                header: 'UAT Testing',
                description: 'Ask testing engg. to set up testing infrastructure.',
                comments: []
            }
        ]
    },

    {
        boardsHeader: 'Testing',
        cards: [
            {
                header: 'UAT Testing',
                description: 'Ask testing engg. to set up testing infrastructure.',
                comments: []
            }
        ]
    },

    {
        boardsHeader: 'Done',
        cards: [
            {
                header: 'UAT Testing',
                description: 'Ask testing engg. to set up testing infrastructure.',
                comments: [
                    {
                        description: 'all right',
                        commentator:'sas'
                    },
                    {
                        description: 'check',
                        commentator:'sas'
                    },
                    {
                        description: 'done',
                        commentator:'sas'
                    },
                    {
                        description: 'well',
                        commentator:'sas'
                    },
                ]
            }
        ]
    }
];

interface ICardState{
    indexBoard:number,
    index : number,
    head: string,
    description: string,
    comments: IComment[];
}

interface IBoardState{
    boardsHeader: string,
    cards: ICard [];

}

export class StorageService {
    dataKey: string = 'data';

    get data(): ICardList[] { 
        const dataString = localStorage.getItem(this.dataKey);
        return JSON.parse(dataString ? dataString : '[]');
    }

    set data(data: ICardList[]) {
        localStorage.setItem(this.dataKey, JSON.stringify(data));
    }
}

export const BoardCard: React.FC<BoardInt> = props=>{
    const storage = new StorageService();
    if (Array.isArray(storage.data) && storage.data.length){
        
    }else{
        storage.data = boards;
    }
    const refNewBoard = useRef<HTMLInputElement>(null);
    const [vlueStateRef, setVlueStateRef] = useState(false);
    const dataBoards = storage.data;

    const [cardState, setCardState] = useState<ICardState>({indexBoard:0 ,index :0,head:'',description:'',comments:[]});
    const [boardState,setBoardState] = React.useState<IBoardState>(dataBoards[1])
    const [modalActive, setModalActive] = useState(true);

    const cardModal = (index:number)=>{
        //console.log('тата',index);
        
    }
    
    const showCardForms = (indexBoard:number ,indexCard:number,header:string,description:string,comments:IComment[])=>{
        setCardState({indexBoard:indexBoard,index :indexCard,head:header,description:description,comments:comments});
        setModalActive(false);
        setVlueStateRef(true)

    }
    
    const addNewCard = (indexBoard:number,value:string)=>{
        dataBoards[indexBoard].cards.push({
            header: value,
            description: '',
            comments: []
        });
  
        storage.data = dataBoards;
        setBoardState(dataBoards[indexBoard]);
    }

    const deleteCard = (indexBoard:number,indexCard:number)=>{
        dataBoards[indexBoard].cards.splice(indexCard,1);
        setBoardState(dataBoards[indexBoard]);
        storage.data = dataBoards;
    }
    
    const changeBoardHeard=(value:string,index:number)=>{
        dataBoards[index].boardsHeader = value;
        storage.data = dataBoards;
    }

    const changeCardHeard=(value:string,indexCard:number,indexBoard:number)=>{
        dataBoards[indexBoard].cards[indexCard].header = value
        storage.data = dataBoards;
        setBoardState(dataBoards[indexBoard]);
    }

    const changeDescryptionCard=(value:string,indexCard:number,indexBoard:number)=>{
        dataBoards[indexBoard].cards[indexCard].description = value
        storage.data = dataBoards;
        setBoardState(dataBoards[indexBoard]);
    }

    const addNewBoadr = ()=>{
        if(refNewBoard.current!.value !==''){
            dataBoards.push({
                boardsHeader: refNewBoard.current!.value ,
                cards: [],
            });
            
            refNewBoard.current!.value = '';
            storage.data = dataBoards;
            setBoardState(dataBoards[dataBoards.length+1]);
        }
        
    }

    const deleteBoard=(indexBoard:number)=>{
        dataBoards.splice(indexBoard,1);
        setBoardState(dataBoards[dataBoards.length-1]);
        storage.data = dataBoards;
    }

    const addComment=(value:string,author:string,cardIndex:number,indexBoard:number)=>{
        dataBoards[indexBoard].cards[cardIndex].comments.push({
            description: value,
            commentator: props.nameOwner ,
        });
        storage.data = dataBoards;
        setCardState({indexBoard:indexBoard,index :cardIndex,head:dataBoards[indexBoard].cards[cardIndex].header,description:dataBoards[indexBoard].cards[cardIndex].description,comments:dataBoards[indexBoard].cards[cardIndex].comments});

    }

    const dellComment=(commentIndex:number,indexCard:number,indexBoard:number)=>{
        dataBoards[indexBoard].cards[indexCard].comments.splice(commentIndex,1);
        storage.data = dataBoards;
        setCardState({indexBoard:indexBoard,index :indexCard,head:dataBoards[indexBoard].cards[indexCard].header,description:dataBoards[indexBoard].cards[indexCard].description,comments:dataBoards[indexBoard].cards[indexCard].comments});
    }

    const changeComment=(commentDescription:string,commentIndex:number,indexCard:number,indexBoard:number)=>{
        dataBoards[indexBoard].cards[indexCard].comments[commentIndex].description=commentDescription;
        storage.data = dataBoards;
        setCardState({indexBoard:indexBoard,index :indexCard,head:dataBoards[indexBoard].cards[indexCard].header,description:dataBoards[indexBoard].cards[indexCard].description,comments:dataBoards[indexBoard].cards[indexCard].comments});
    }
    
    return(
        <div className='board-main' >
            {dataBoards.map((board, boardIndex) =>{
            return(
                <BoardContent 
                key={boardIndex}
                deletBoard={deleteBoard} 
                boardHeard={changeBoardHeard} 
                addNewCard={addNewCard} 
                deleteCard={deleteCard} 
                showCardForm={showCardForms} 
                setBoardState={setBoardState} 
                boardState={board} 
                nameOwner={props.nameOwner} 
                index={boardIndex} />
                
            )
        })}
        <div className='board'>
            <div className='board-head'  >
                
                <input 
                className='board-headText' 
                name = 'boardHeard'
                id = 'boardHeard'              
                type="text"
                placeholder = 'Add New Board'
                ref = {refNewBoard}
                />
                <button className="addBoardButton" onClick={()=>addNewBoadr()}></button>
            </div>

        </div>
        <Card
        changeComment={changeComment} 
        dellComment={dellComment}
        newComment={addComment}
        cardDescryption={changeDescryptionCard}
        nameOwner={props.nameOwner}
        setVlueStateRef={setVlueStateRef}
        vlueStateRef={vlueStateRef}
        cardHeard={changeCardHeard} 
        cardState={cardState} 
        setCardState={setCardState} 
        onAdd = {cardModal} 
        active={modalActive} 
        setActive ={setModalActive}/>
        </div>
    )
}