import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { IBoardState } from '../interface/interface';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { IRootState } from '../../redux/initialState';
import { useActions } from '../../hooks/useActions';
import { v4 as uuidv4 } from 'uuid';
import { useTypedSelector } from '../../hooks/useTypeSelector';

interface BoardContentProps {
    boardState: IBoardState;
    index: number;
    onShowCardForm(boardId: string, cardId: string, header: string, description: string): void;
}

export const BoardContent = ({ boardState, onShowCardForm }: BoardContentProps) => {
    const refBoardHead = useRef<HTMLInputElement>(null);
    const refNewCard = useRef<HTMLInputElement>(null);
    const [activeAddF, setActiveAddF] = useState(false);
    const { addCard } = useActions();
    const { dellCard } = useActions();
    const { dellBoard } = useActions();
    const { dellCardCascade } = useActions();
    const { changeHeardBoard } = useActions();
    const { dellCommentCascade } = useActions();
    const { comments } = useTypedSelector((state) => state);

    const getCards = (state: IRootState) => state;

    const selectCardsByBoardId = createSelector([getCards], (state: IRootState) => {
        return state.cards.filter((cards) => cards.boardId === boardState.boardId);
    });
    const cardsByBoard = useSelector(selectCardsByBoardId);

    const handleChangeBoardTitle = () => {
        changeHeardBoard({ boardsHeader: refBoardHead.current!.value, boardId: boardState.boardId });
    };

    const handleOpenCard = (cardId: string, header: string, boardId: string, description: string) => {
        onShowCardForm(boardId, cardId, header, description);
    };

    const handleDeleteCard = (e: React.SyntheticEvent, cardId: string) => {
        e.stopPropagation();
        dellCard({ cardId: cardId });
        dellCommentCascade({ cardId: cardId });
    };

    const handleNewCard = (e: React.SyntheticEvent) => {
        e.stopPropagation();
        if (refNewCard.current!.value !== '') {
            const id = uuidv4();
            addCard({ header: refNewCard.current!.value, cardId: id, description: '', boardId: boardState.boardId });
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
        dellBoard({ boardId: boardId });
        dellCardCascade({ boardId: boardId });
    };

    return (
        <BoardBody className="board" key={boardState.boardId}>
            <BoardHead>
                <BoardHeadText
                    key={boardState.boardId}
                    name="boardHeard"
                    id={boardState.boardId}
                    type="text"
                    defaultValue={boardState.boardsHeader}
                    ref={refBoardHead}
                    onInput={handleChangeBoardTitle}
                />
                <DeleteBoardButton onClick={() => handleDeleteBoard(boardState.boardId)}>Dell</DeleteBoardButton>
            </BoardHead>
            <BoardMain>
                {cardsByBoard.map((card, cardIndex) => {
                    return (
                        <Card
                            key={cardIndex}
                            onClick={() =>
                                handleOpenCard(card.cardId, card.header, boardState.boardId, card.description)
                            }
                        >
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
