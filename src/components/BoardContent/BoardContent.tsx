import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { IBoardState, IComment } from '../interface/interface';

interface BoardContentProps {
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

export const BoardContent = ({
    boardState,
    index,
    onShowCardForm,
    onDeleteCard,
    onAddNewCard,
    onBoardHeard,
    onDeleteBoard,
}: BoardContentProps) => {
    const refBoardHead = useRef<HTMLInputElement>(null);
    const refNewCard = useRef<HTMLInputElement>(null);
    const [activeAddF, setActiveAddF] = useState(false);

    const handleChangeBoardTitle = () => {
        onBoardHeard(refBoardHead.current!.value, index);
    };

    const handleOpenCard = (
        indexCard: number,
        header: string,
        comments: IComment[],
        indexBoard: number,
        description: string,
    ) => {
        onShowCardForm(indexBoard, indexCard, header, description, comments);
    };

    const handleDeleteCard = (e: React.SyntheticEvent, boardIndex: number, cardIndex: number) => {
        e.stopPropagation();
        onDeleteCard(boardIndex, cardIndex);
    };

    const handleNewCard = (e: React.SyntheticEvent, indexBoard: number) => {
        e.stopPropagation();
        if (refNewCard.current!.value !== '') {
            onAddNewCard(indexBoard, refNewCard.current!.value);
            refNewCard.current!.value = '';
            setActiveAddF(false);
        } else {
            setActiveAddF(false);
        }
    };

    const ShowAddCardForm = () => {
        setActiveAddF(true);
    };

    const handleDeleteBoard = (indexBoard: number) => {
        onDeleteBoard(indexBoard);
    };

    return (
        <BoardBody className="board" key={index}>
            <BoardHead>
                <BoardHeadText
                    key={index}
                    name="boardHeard"
                    id={'boardHeard' + index}
                    type="text"
                    defaultValue={boardState.boardsHeader}
                    ref={refBoardHead}
                    onInput={handleChangeBoardTitle}
                />
                <DeleteBoardButton onClick={() => handleDeleteBoard(index)}>Dell</DeleteBoardButton>
            </BoardHead>
            <BoardMain>
                {boardState.cards.map((card, cardIndex) => {
                    return (
                        <Card
                            key={cardIndex}
                            onClick={() =>
                                handleOpenCard(cardIndex, card.header, card.comments, index, card.description)
                            }
                        >
                            <CardHead>
                                {card.header}

                                <DeleteCardButton onClick={(e) => handleDeleteCard(e, index, cardIndex)}>
                                    Dell
                                </DeleteCardButton>
                            </CardHead>

                            <br />

                            <CardBody>Comments: {card.comments.length}</CardBody>
                        </Card>
                    );
                })}
                <CardNew onClick={ShowAddCardForm}>
                    <AddCardTitle theme={{ active: activeAddF }}>Add new card</AddCardTitle>
                    <AddCardBody theme={{ active: activeAddF }}>
                        <NewCardTitle type="text" ref={refNewCard} />
                        <AddCardButton onClick={(e) => handleNewCard(e, index)}>Add</AddCardButton>
                    </AddCardBody>
                </CardNew>
            </BoardMain>
        </BoardBody>
    );
};

const BoardBody = styled.div`
    height: 600px;
    width: 300px;
    background-color: blueviolet;
    display: flex;
    flex-direction: column;
    margin-right: 10px;
    margin-top: 10px;
    border-radius: 8px 8px 4px 8px;
    position: relative;
`;

const BoardHead = styled.div`
    height: 60px;
    width: 300px;
    background-color: rgb(202, 166, 235);
    border-radius: 8px 8px 0 0;
    position: relative;
`;

const BoardMain = styled.div`
    height: 100%;
    width: 100%;
    overflow: visible;
    overflow-x: hidden;
`;

const AddCardTitle = styled.span`
    display: ${(props) => (props.theme.active ? 'none' : '')};
    margin-left: 9px;
    font-size: 20px;
`;

const AddCardBody = styled.div`
    display: ${(props) => (props.theme.active ? '' : 'none')};
`;

const BoardHeadText = styled.input`
    height: 50px;
    width: 250px;
    font-size: 26px;
    border-radius: 8px;
    border: none;
    margin-left: 10px;
    background-color: rgb(202, 166, 235);
    outline: none;
    -moz-appearance: none;
    resize: none;
`;

const DeleteBoardButton = styled.button`
    float: right;
    margin-right: 8px;
    margin-top: 8px;
    height: 40px;
    width: 26px;
    border-radius: 0 8px 8px 0;
    background-color: rgb(243, 71, 71);
    border: rgb(243, 71, 71);
    color: rgb(255, 255, 255);
    padding: 0;
    font-size: 9px;
    &:hover {
        color: rgb(0, 0, 0);
        background-color: rgb(231, 181, 181);
    }
`;

const Card = styled.div`
    width: 280px;
    background-color: rgb(216, 208, 224);
    border-radius: 8px;
    margin-top: 10px;
    margin-left: 10px;
`;

const CardNew = styled(Card)`
    margin-bottom: 30px;
    height: 40px;
`;

const CardHead = styled.div`
    margin-left: 10px;
`;

const CardBody = styled.div`
    margin-left: 15px;
    font-size: 10px;
`;

const DeleteCardButton = styled.button`
    float: right;
    margin-right: 8px;
    margin-top: 5px;
    height: 20px;
    width: 20px;
    border-radius: 8px;
    background-color: rgb(243, 71, 71);
    border: rgb(243, 71, 71);
    color: rgb(255, 255, 255);
    padding: 0;
    font-size: 9px;
    &:hover {
        color: rgb(0, 0, 0);
        background-color: rgb(231, 181, 181);
    }
`;

const NewCardTitle = styled.input`
    background-color: #ffffff;
    border: none;
    border-radius: 8px 0 0 8px;
    margin-left: 9px;
    margin-top: 7px;
    font-size: 20px;
    width: 238px;
`;

const AddCardButton = styled.button`
    float: right;
    margin-right: 8px;
    margin-top: 7px;
    height: 24px;
    width: 20px;
    border-radius: 0 8px 8px 0;
    background-color: rgb(0, 255, 34);
    border: rgb(243, 71, 71);
    color: rgb(0, 0, 0);
    padding: 0;
    font-size: 9px;
    &:hover {
        color: rgb(0, 0, 0);
        background-color: rgb(189, 255, 198);
    }
`;
