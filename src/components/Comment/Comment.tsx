import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { IComment } from '../interface/interface';
import { useActions } from '../../hooks/useActions';

interface CommentProps {
    valueCommentRef: boolean;
    commentState: IComment;
    commentIndex: string;
}

export const Comment = ({ valueCommentRef, commentState, commentIndex }: CommentProps) => {
    const refCommentDescriptor = useRef<HTMLTextAreaElement>(null);
    const { dellComment } = useActions();
    const { updateComment } = useActions();

    useEffect(() => {
        if (valueCommentRef) {
            refCommentDescriptor.current!.value = commentState.description;
        }
    }, [valueCommentRef, commentState.description]);

    const handleDellComment = () => {
        dellComment({ commentId: commentState.commentId });
    };

    const handleChangeComment = () => {
        if (refCommentDescriptor.current!.value !== '') {
            updateComment({ commentId: commentIndex, description: refCommentDescriptor.current!.value });
            refCommentDescriptor.current!.value = commentState.description;
        }
    };

    return (
        <CommentCard key={commentIndex}>
            <CommentDescription name="" ref={refCommentDescriptor} defaultValue={commentState.description} />
            <CommentFooter>
                <CommentAuthor>
                    Author: <b>{commentState.commentator}</b>
                </CommentAuthor>

                <ChangeCommentButton onClick={handleChangeComment}>Change</ChangeCommentButton>
                <DellCommentButton onClick={handleDellComment}>Dell</DellCommentButton>
            </CommentFooter>
        </CommentCard>
    );
};

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

const CommentDescription = styled.textarea`
    position: relative;
    margin-left: 5px;
    width: 320px;
    height: 20px;
    border: none;
    border-radius: 5px;
    float: left;
    overflow: visible;
    overflow-x: hidden;
`;

const CommentFooter = styled.div`
    display: flex;
    justify-content: space-between;
    float: right;
    margin-right: 5px;
    height: 100%;
    width: 160px;
    margin-top: 5px;
`;

const CommentAuthor = styled.span`
    overflow: visible;
    overflow-x: hidden;
    font-size: 12px;
`;

const ChangeCommentButton = styled.button`
    width: 28px;
    height: 15px;
    border: none;
    border-radius: 3px;
    background-color: #efff09;
    color: rgb(0, 0, 0);
    padding: 0;
    font-size: 8px;
    &:hover {
        background-color: #f3f8a6;
        border: 1px dashed rgba(170, 50, 220, 0.6);
    }
`;

const DellCommentButton = styled.button`
    margin-left: 5px;
    width: 20px;
    height: 15px;
    border: none;
    border-radius: 3px;
    background-color: #c50303;
    color: rgb(255, 255, 255);
    padding: 0;
    font-size: 9px;
    &:hover {
        background-color: #f89494;
        border: 1px dashed rgba(39, 243, 233, 0.6);
    }
`;
