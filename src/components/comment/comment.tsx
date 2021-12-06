import React, { useRef,useEffect} from 'react';
import {ICommentProps} from '../interface/interface';
import './commentStyle.css';

export const Comment: React.FC<ICommentProps> = props => {

    const refCommentDescript = useRef<any>(null);

    useEffect( () => { 
    
        if (props.vlueCommentRef){
            refCommentDescript.current!.value = props.commentState.description;
        }
    });

    const dellComment = () => {
        props.dellComment(props.commentIndex);
    }

    const changeComment = () => {
        if(refCommentDescript.current!.value !==''){
            props.changeComment(refCommentDescript.current!.value,props.commentIndex);
            refCommentDescript.current!.value = props.commentState.description;
        }
    }

    return(
        <div className='commentCard' key={props.commentIndex}>
            <span className='commentBody deactive'>{props.commentState.description}</span>
            <textarea
                className='commentBody'  
                name=""
                ref={refCommentDescript}  
                defaultValue={props.commentState.description}
            />
            <div className='commentFooter'>
                
                <span className='commentAuthor'>
                    Author: <b>{props.commentState.commentator}</b> 
                </span>

                <button className='changeComment' onClick={changeComment} />
                <button className='dellComment' onClick={dellComment} />
            </div>
        </div>
    )
}