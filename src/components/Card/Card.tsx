import React, { useRef, useEffect, useState } from 'react';
import { Comment } from '../Comment/Comment';
import styled from 'styled-components';
import { ICardState } from '../interface/interface';

interface CardProps {
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

export const Card = ({
    valueStateRef,
    onSetValueStateRef,
    active,
    onSetActive,
    cardState,
    onCardHeard,
    onCardDescription,
    nameOwner,
    onNewComment,
    onDellComment,
    onChangeComment,
}: CardProps) => {
    const refCardHead = useRef<HTMLInputElement>(null);
    const refCardDescriptor = useRef<HTMLTextAreaElement>(null);
    const refCardComment = useRef<HTMLInputElement>(null);
    const [valueCommentRef, setValueCommentRef] = useState(false);

    useEffect(() => {
        if (valueStateRef) {
            refCardHead.current!.value = cardState.head;
            refCardDescriptor.current!.value = cardState.description;
            refCardComment.current!.value = '';
            onSetValueStateRef(false);
            setValueCommentRef(true);
        }
    }, [valueStateRef, cardState.description, cardState.head, onSetValueStateRef]);

    const handleChangeDescription = (event: React.MouseEvent) => {
        event.stopPropagation();
        if (refCardDescriptor.current!.value !== '') {
            onCardDescription(refCardDescriptor.current!.value, cardState.index, cardState.indexBoard);
        }
    };

    useEffect(() => {
        const keyDownEsc = (ev: KeyboardEvent) => {
            if (ev.keyCode === 27 && !active) {
                onSetActive(true);
                document.removeEventListener('keydown', keyDownEsc);
            }
        };
        if (!active) {
            document.addEventListener('keydown', keyDownEsc);
        }
    }, [active, onSetActive]);

    const handleCloseModal = (e: React.SyntheticEvent) => {
        e.stopPropagation();
        onSetActive(true);
    };

    const handleStopPropagation = (e: React.SyntheticEvent) => {
        e.stopPropagation();
    };

    const handleChangeHeadCard = () => {
        onCardHeard(refCardHead.current!.value, cardState.index, cardState.indexBoard);
    };

    const handleAddNewComment = () => {
        if (refCardComment.current!.value !== '') {
            onNewComment(refCardComment.current!.value, nameOwner, cardState.index, cardState.indexBoard);
            refCardComment.current!.value = '';
        }
    };

    const handleDellComment = (commentIndex: number) => {
        onDellComment(commentIndex, cardState.index, cardState.indexBoard);
    };

    const handleChangeComment = (commentDescription: string, commentIndex: number) => {
        onChangeComment(commentDescription, commentIndex, cardState.index, cardState.indexBoard);
    };

    return (
        <CardForm theme={{ active: active }} onClick={handleCloseModal}>
            <CardFormBody onClick={handleStopPropagation}>
                <CardName
                    name={'cardFormHeard' + cardState.index}
                    defaultValue={cardState.head}
                    type="text"
                    ref={refCardHead}
                    onInput={() => handleChangeHeadCard()}
                />

                <CloseCard onClick={handleCloseModal}>close</CloseCard>

                <br />
                <DescriptionCard>
                    <CardDescription ref={refCardDescriptor} defaultValue={cardState.description} />

                    <ChangeDescriptionCard onClick={handleChangeDescription}>Change</ChangeDescriptionCard>
                </DescriptionCard>
                <CardComment>
                    {cardState.comments.map((comment, commentIndex) => {
                        return (
                            <Comment
                                valueCommentRef={valueCommentRef}
                                onChangeComment={handleChangeComment}
                                key={commentIndex}
                                onDellComment={handleDellComment}
                                commentState={comment}
                                commentIndex={commentIndex}
                            />
                        );
                    })}
                    <CommentCard>
                        <span>Add new Comment : </span>

                        <CardNewComment
                            name={'cardNewComment'}
                            type="text"
                            placeholder="new comment text"
                            ref={refCardComment}
                            onInput={() => handleChangeHeadCard()}
                        />

                        <AddNewCommentButton onClick={handleAddNewComment}>Add</AddNewCommentButton>
                    </CommentCard>
                </CardComment>
                <br />
            </CardFormBody>
        </CardForm>
    );
};

const CardForm = styled.div`
    text-align: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    position: fixed;
    top: 0;
    left: 0;
    display: ${(props) => (props.theme.active ? 'none' : 'flex')};
    align-items: center;
    justify-content: center;
`;

const CardFormBody = styled.div`
    height: 620px;
    width: 600px;
    background-color: #fdfcfc;
    border-radius: 12px;
    padding: 20px;
    font-size: 55px;
`;

const CardName = styled.input`
    height: 50px;
    width: 520px;
    font-size: 26px;
    border-radius: 8px;
    border: none;
    margin-left: 10px;
    padding-left: 10px;
    background-color: rgb(236, 222, 248);
    outline: none;
    -moz-appearance: none;
    resize: none;
`;

const CardDescription = styled.textarea`
    width: 520px;
    height: 200px;
    border-radius: 8px 0 0 8px;
`;

const CloseCard = styled.button`
    margin-left: 15px;
    color: rgb(240, 58, 58);
    font-weight: bold;
    float: right;
    font-size: 26px;
    line-height: 20px;
    cursor: pointer;
    transition: 0.3s;
    color: rgb(166, 0, 0);
    padding: 0;
    font-size: 10px;
    &:hover {
        color: rgb(188 193 6);
    }
`;

const DescriptionCard = styled.div`
    padding: 0 0 0 24px;
    width: 560px;
    height: 202px;
    display: flex;
    margin-top: 15px;
    margin-bottom: 15px;
`;

const ChangeDescriptionCard = styled.button`
    width: 18px;
    border-radius: 0 8px 8px 0;
    border: none;
    height: 207px;
    background-color: rgb(0, 212, 81);
    color: rgb(123, 134, 47);
    padding: 5px;
    font-size: 16px;
    word-wrap: break-word;
    &:hover {
        background-color: rgb(210, 255, 227);
        color: rgb(234, 13, 247);
    }
`;

const CardComment = styled.div`
    position: relative;
    margin-left: 50px;
    height: 320px;
    width: 540px;
    border-radius: 8px 8px 8px 8px;
    background-color: rgb(236, 222, 248);
    overflow: visible;
    overflow-x: hidden;
`;

const CommentCard = styled.div`
    margin-top: 2px;
    margin-left: 15px;
    position: relative;
    width: 500px;
    min-height: 26px;
    font-size: 14px;
    border-radius: 4px 4px 4px 4px;
    background-color: #fdfcfc;
    margin-bottom: 12px;
`;

const AddNewCommentButton = styled.button`
    position: relative;
    top: 0px;
    margin-left: 5px;
    width: 40px;
    height: 17px;
    border: none;
    border-radius: 3px;
    background-color: #00ff40;
    color: rgb(255, 255, 255);
    padding: 0;
    font-size: 12px;
    &:hover {
        background-color: #59f3d9;
        border: 1px dashed rgba(39, 243, 233, 0.6);
    }
`;

const CardNewComment = styled.input`
    height: 20px;
    width: 190px;
    border: 1px solid rgb(190, 96, 96);
    color: rgb(0, 0, 0);
    border-radius: 4px;
`;
