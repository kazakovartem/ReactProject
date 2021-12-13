import { IComment } from '../interface/interface';

export interface ICommentProps {
    valueCommentRef: boolean;
    commentState: IComment;
    commentIndex: number;
    onDellComment(commentIndex: number): void;
    onChangeComment(commentDescription: string, commentIndex: number): void;
}
