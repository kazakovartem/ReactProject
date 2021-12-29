import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { ICardState } from '../../types/index';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { selectors } from '../../state/ducks/ducks';
import { actions } from '../../state/ducks/ducks';

interface BoardContentProps {
    boardId: string;
    onShowCardForm(cardId: string): void;
}

const BoardContent = ({ onShowCardForm, boardId }: BoardContentProps) => {
    const refBoardHead = useRef<HTMLInputElement>(null);
    const refNewCard = useRef<HTMLInputElement>(null);
    const [activeAddF, setActiveAddF] = useState(false);
    const dispatch = useDispatch();

    console.log('draw boardContent ', boardId, Date.now());

    const board = useSelector(selectors.boards.getBoardById(boardId));
    const cardsByBoard = useSelector(selectors.cards.getCardsByBoardId(boardId));
    const comments = useSelector(selectors.comments.getCommentsByBoardId(boardId));

    const handleChangeBoardTitle = () => {
        dispatch(
            actions.boards.changeHeardBoard({
                boardsHeader: refBoardHead.current!.value,
                boardId: boardId,
            }),
        );
    };

    const handleOpenCard = (cardId: string) => {
        onShowCardForm(cardId);
    };

    const handleDeleteCard = (e: React.SyntheticEvent, cardId: string) => {
        e.stopPropagation();
        dispatch(actions.cards.dellCard({ cardId: cardId }));
        dispatch(actions.comments.dellCommentCascade({ cardId: cardId }));
    };

    const handleNewCard = (e: React.SyntheticEvent) => {
        e.stopPropagation();
        if (refNewCard.current!.value !== '') {
            const id = uuidv4();
            dispatch(
                actions.cards.addCard({
                    header: refNewCard.current!.value,
                    cardId: id,
                    description: '',
                    boardId: boardId,
                }),
            );
            refNewCard.current!.value = '';
            setActiveAddF(false);
        } else {
            setActiveAddF(false);
        }
    };

    const ShowAddCardForm = () => {
        setActiveAddF(true);
    };

    const handleDeleteBoard = (boardId: string) => {
        dispatch(actions.boards.dellBoard({ boardId: boardId }));
        dispatch(actions.cards.dellCardCascade({ boardId: boardId }));
        cardsByBoard.forEach((element: ICardState) =>
            dispatch(actions.comments.dellCommentCascade({ cardId: element.cardId })),
        );
    };

    return (
        <BoardBody className="board" key={boardId}>
            <BoardHead>
                <BoardHeadText
                    key={boardId}
                    name="boardHeard"
                    id={boardId}
                    type="text"
                    defaultValue={board?.boardsHeader}
                    ref={refBoardHead}
                    onInput={handleChangeBoardTitle}
                />
                <DeleteBoardButton onClick={() => handleDeleteBoard(boardId)}>Dell</DeleteBoardButton>
            </BoardHead>
            <BoardMain>
                {cardsByBoard.map((card, cardIndex: number) => {
                    return (
                        <Card key={cardIndex} onClick={() => handleOpenCard(card.cardId)}>
                            <CardHead>
                                {card.header}

                                <DeleteCardButton onClick={(e) => handleDeleteCard(e, card.cardId)}>
                                    Dell
                                </DeleteCardButton>
                            </CardHead>

                            <br />

                            <CardBody>
                                Comments: {comments.filter((comments) => comments.cardId === card.cardId).length}
                            </CardBody>
                        </Card>
                    );
                })}
                <CardNew onClick={ShowAddCardForm}>
                    <AddCardTitle theme={{ active: activeAddF }}>Add new card</AddCardTitle>
                    <AddCardBody theme={{ active: activeAddF }}>
                        <NewCardTitle type="text" ref={refNewCard} />
                        <AddCardButton onClick={(e) => handleNewCard(e)}>Add</AddCardButton>
                    </AddCardBody>
                </CardNew>
            </BoardMain>
        </BoardBody>
    );
};

export default React.memo(BoardContent);

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
