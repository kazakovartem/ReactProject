import React, { useRef, useState } from 'react';
import { Card } from '../Card/Card';
import { BoardContent } from '../BoardContent/BoardContent';
import { ICardState } from '../../types';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { boardSelectors } from '../../state/ducks/boards';
import { boardOperations } from '../../state/ducks/boards';

export const BoardCard = () => {
    const dispatch = useDispatch();
    const refNewBoard = useRef<HTMLInputElement>(null);
    const [valueStateRef, setValueStateRef] = useState(false);
    console.log('draw boardCard', Date.now());
    const [cardState, setCardState] = useState<ICardState>({
        boardId: '0',
        cardId: '0',
        header: '',
        description: '',
    });
    const boards = useSelector(boardSelectors.getBoards());
    console.log(boards);
    const [modalActive, setModalActive] = useState(true);

    const handleShowCardForms = (boardId: string, cardId: string, header: string, description: string) => {
        setCardState({
            boardId: boardId,
            cardId: cardId,
            header: header,
            description: description,
        });
        setModalActive(false);
        setValueStateRef(true);
    };

    const handleAddNewBoard = () => {
        if (refNewBoard.current!.value !== '') {
            const id = uuidv4();
            dispatch(boardOperations.addBoard({ boardsHeader: refNewBoard.current!.value, boardId: id }));
            refNewBoard.current!.value = '';
        }
    };

    return (
        <BoardMain>
            {boards.map((board) => {
                return (
                    <BoardContent key={board.boardId} onShowCardForm={handleShowCardForms} boardId={board.boardId} />
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
                onSetValueStateRef={setValueStateRef}
                valueStateRef={valueStateRef}
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
