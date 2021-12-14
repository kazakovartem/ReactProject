import React, { useRef, useState } from 'react';
import { Card } from '../Card/Card';
import { BoardContent } from '../BoardContent/BoardContent';
import { StorageService } from '../storage/StorageService';
import { DefaultData } from '../storage/DefaultData';
import { ICardState, IBoardState, IComment } from '../interface/interface';
import styled from 'styled-components';

interface BoardProps {
    nameOwner: string;
}

export const BoardCard = ({ nameOwner }: BoardProps) => {
    const storage = new StorageService();

    if (!(Array.isArray(storage.data) && storage.data.length)) {
        storage.data = DefaultData;
    }

    const refNewBoard = useRef<HTMLInputElement>(null);
    const [valueStateRef, setValueStateRef] = useState(false);
    const dataBoards = storage.data;

    const [cardState, setCardState] = useState<ICardState>({
        indexBoard: 0,
        index: 0,
        head: '',
        description: '',
        comments: [],
    });
    const [boardState, setBoardState] = React.useState<IBoardState>(dataBoards[1]);
    const [modalActive, setModalActive] = useState(true);

    const handleShowCardForms = (
        indexBoard: number,
        indexCard: number,
        header: string,
        description: string,
        comments: IComment[],
    ) => {
        setCardState({
            indexBoard: indexBoard,
            index: indexCard,
            head: header,
            description: description,
            comments: comments,
        });

        setModalActive(false);
        setValueStateRef(true);
    };

    const handleAddNewCard = (indexBoard: number, value: string) => {
        dataBoards[indexBoard].cards.push({
            header: value,
            description: '',
            comments: [],
        });

        storage.data = dataBoards;
        setBoardState(dataBoards[indexBoard]);
    };

    const handleDeleteCard = (indexBoard: number, indexCard: number) => {
        dataBoards[indexBoard].cards.splice(indexCard, 1);
        setBoardState(dataBoards[indexBoard]);
        storage.data = dataBoards;
    };

    const handleChangeBoardHeard = (value: string, index: number) => {
        dataBoards[index].boardsHeader = value;
        storage.data = dataBoards;
    };

    const handleChangeCardHeard = (value: string, indexCard: number, indexBoard: number) => {
        dataBoards[indexBoard].cards[indexCard].header = value;
        storage.data = dataBoards;
        setBoardState(dataBoards[indexBoard]);
    };

    const handleChangeDescriptionCard = (value: string, indexCard: number, indexBoard: number) => {
        dataBoards[indexBoard].cards[indexCard].description = value;
        storage.data = dataBoards;
        setBoardState(dataBoards[indexBoard]);
    };

    const handleAddNewBoard = () => {
        if (refNewBoard.current!.value !== '') {
            const timer = Date.now();
            dataBoards.push({
                boardsHeader: refNewBoard.current!.value,
                boardId: timer,
                cards: [],
            });

            refNewBoard.current!.value = '';
            storage.data = dataBoards;
            setBoardState({
                boardsHeader: refNewBoard.current!.value,
                boardId: timer,
                cards: [],
            });
        }
    };

    const handleDeleteBoard = (indexBoard: number) => {
        dataBoards.splice(indexBoard, 1);
        setBoardState(dataBoards[dataBoards.length - 1]);
        storage.data = dataBoards;
    };

    const handleAddComment = (value: string, author: string, cardIndex: number, indexBoard: number) => {
        dataBoards[indexBoard].cards[cardIndex].comments.push({
            description: value,
            commentator: nameOwner,
        });

        storage.data = dataBoards;

        setCardState({
            indexBoard: indexBoard,
            index: cardIndex,
            head: dataBoards[indexBoard].cards[cardIndex].header,
            description: dataBoards[indexBoard].cards[cardIndex].description,
            comments: dataBoards[indexBoard].cards[cardIndex].comments,
        });
    };

    const handleDellComment = (commentIndex: number, indexCard: number, indexBoard: number) => {
        dataBoards[indexBoard].cards[indexCard].comments.splice(commentIndex, 1);
        storage.data = dataBoards;

        setCardState({
            indexBoard: indexBoard,
            index: indexCard,
            head: dataBoards[indexBoard].cards[indexCard].header,
            description: dataBoards[indexBoard].cards[indexCard].description,
            comments: dataBoards[indexBoard].cards[indexCard].comments,
        });
    };

    const handleChangeComment = (
        commentDescription: string,
        commentIndex: number,
        indexCard: number,
        indexBoard: number,
    ) => {
        dataBoards[indexBoard].cards[indexCard].comments[commentIndex].description = commentDescription;
        storage.data = dataBoards;

        setCardState({
            indexBoard: indexBoard,
            index: indexCard,
            head: dataBoards[indexBoard].cards[indexCard].header,
            description: dataBoards[indexBoard].cards[indexCard].description,
            comments: dataBoards[indexBoard].cards[indexCard].comments,
        });
    };

    return (
        <BoardMain>
            {dataBoards.map((board, boardIndex) => {
                return (
                    <BoardContent
                        key={board.boardId}
                        onDeleteBoard={handleDeleteBoard}
                        onBoardHeard={handleChangeBoardHeard}
                        onAddNewCard={handleAddNewCard}
                        onDeleteCard={handleDeleteCard}
                        onShowCardForm={handleShowCardForms}
                        boardState={board}
                        nameOwner={nameOwner}
                        index={boardIndex}
                    />
                );
            })}

            <NewBoardBody>
                <BoardHead>
                    <BoardHeadText
                        name="boardHeard"
                        id="boardHeard"
                        type="text"
                        placeholder="Add New Board"
                        ref={refNewBoard}
                    />
                    <AddBoardButton onClick={() => handleAddNewBoard()}>Add</AddBoardButton>
                </BoardHead>
            </NewBoardBody>

            <Card
                onChangeComment={handleChangeComment}
                onDellComment={handleDellComment}
                onNewComment={handleAddComment}
                onCardDescription={handleChangeDescriptionCard}
                nameOwner={nameOwner}
                onSetValueStateRef={setValueStateRef}
                valueStateRef={valueStateRef}
                onCardHeard={handleChangeCardHeard}
                cardState={cardState}
                setCardState={setCardState}
                active={modalActive}
                onSetActive={setModalActive}
            />
        </BoardMain>
    );
};

const BoardMain = styled.div`
    height: 100%;
    width: 95%;
    display: flex;
    overflow: visible;
    overflow-y: hidden;
`;

const NewBoardBody = styled.div`
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

const AddBoardButton = styled.button`
    margin-right: 8px;
    margin-top: 5px;
    float: right;
    height: 40px;
    width: 26px;
    border-radius: 0 8px 8px 0;
    background-color: rgb(43, 238, 4);
    border: rgb(43, 238, 4);
    color: rgb(0, 0, 0);
    padding: 0;
    font-size: 9px;
    &:hover {
        background-color: rgb(200, 253, 190);
    }
`;

const BoardHead = styled.div`
    height: 60px;
    width: 300px;
    background-color: rgb(202, 166, 235);
    border-radius: 8px 8px 0 0;
    position: relative;
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
