import React, { useRef,useEffect,useState } from 'react';
import {Comment} from '../comment/comment';
import {ICoardProps} from '../interface/interface';
import './cardStyle.css';

export const Card: React.FC<ICoardProps> = props => {
    const refCardHead = useRef<HTMLInputElement>(null);
    const refCardDescript = useRef<HTMLTextAreaElement>(null);
    const refCardComment = useRef<HTMLInputElement>(null);
    const [vlueCommentRef, setVlueCommentRef] = useState(false);
    
    useEffect( () => { 
    
        if (props.vlueStateRef){
            refCardHead.current!.value = props.cardState.head;
            refCardDescript.current!.value = props.cardState.description;
            refCardComment.current!.value = '';
            props.setVlueStateRef(false)
            setVlueCommentRef(true)
        }
    });
    
    const changeDescryption = (event: React.MouseEvent) =>{
        event.stopPropagation();
        if(refCardDescript.current!.value !== ''){
            props.cardDescryption(
                refCardDescript.current!.value,
                props.cardState.index,
                props.cardState.indexBoard
            );
        }

    }
    onkeydown = (event) => {
        if (event.keyCode === 27 && !props.active) {
            props.setActive(true);
        }
    }

    const closeModal = (e:React.SyntheticEvent) =>{
        e.stopPropagation();
        props.setActive(true);
    }

    const stopPropagination = (e:React.SyntheticEvent) =>{
        e.stopPropagation();
    }

    const changeHeadCard=(e:React.SyntheticEvent)=>{
        props.cardHeard(
            refCardHead.current!.value,
            props.cardState.index,
            props.cardState.indexBoard
        );
    }

    const addNewComment = () => {
        if(refCardComment.current!.value !== ''){
            props.newComment(
                refCardComment.current!.value, 
                props.nameOwner,
                props.cardState.index,
                props.cardState.indexBoard
            );

            refCardComment.current!.value = '';
        }

    }

    const dellComment = (commentIndex:number) => {
        props.dellComment(
            commentIndex,
            props.cardState.index,
            props.cardState.indexBoard
        );
    }

    const changeComment = (commentDescription:string,commentIndex:number) => {
        props.changeComment(
            commentDescription,
            commentIndex,
            props.cardState.index,
            props.cardState.indexBoard
        );
    }

    return( 
        <div className={props.active ? "card-Form deactive" : "card-Form" } onClick={closeModal}>
            <div className="card-FormBody" onClick={stopPropagination}>

                <input 
                    className='card-headText' 
                    name={'cardFormHeard'+ props.cardState.index}
                    defaultValue={props.cardState.head}
                    type="text"
                    ref={refCardHead}
                    onInput={(e)=>changeHeadCard(e)}
                /> 

                <button className="closeCard" onClick={closeModal}>&times;</button>
                
                <br />

                <textarea
                    className='cardDescryption'  
                    ref={refCardDescript}
                    name=""  
                    defaultValue={props.cardState.description}
                />


                <button onClick={changeDescryption} className='cardDescryptionButton' />
                <div className="cardComment" >
                    {props.cardState.comments.map((comment, commentIndex)=>{
                        return( 

                            <Comment
                                vlueCommentRef={vlueCommentRef}
                                setVlueCommentRef={setVlueCommentRef}
                                changeComment={changeComment}
                                key={commentIndex}
                                dellComment={dellComment}
                                commentState={comment}
                                commentIndex={commentIndex}
                            />
                        )
                    })}
                    <div className='commentCard' >
                        <span>Add new Comment : </span>

                        <span  className='addNewComment'>

                            <input 
                                className='cardNewComment' 
                                name={'cardNewComment'}
                                type="text"
                                placeholder="new comment text"
                                ref={refCardComment}
                                onInput={(e)=>changeHeadCard(e)}
                            />

                            <button className='addNewCommentButton' onClick={addNewComment} />
                        </span>
                    </div>
                </div>
                <br />
            </div>
        </div>
    )
}