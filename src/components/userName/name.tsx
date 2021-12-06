import React, { useRef } from 'react';
import {INameUserProps} from '../interface/interface';
import './nameStyle.css';

export const NameForm: React.FC<INameUserProps> = props => {

    const ref = useRef<HTMLInputElement>(null);
    
    const keyPress = (event: React.MouseEvent) =>{
        if(ref.current!.value !== ''){
            props.onAdd(ref.current!.value);
            ref.current!.value = '';
            props.setActive(true);
        }
    }
    
    return (
        <div className={props.active ? "popup_nameForm deactive" : "popup_nameForm"}>
            <div className="popup_name">
                <label htmlFor="titleName" className='popup_nameLable'>
                    Enter you name :
                </label>

                <br/>

                <input 
                    type="text" 
                    required
                    placeholder='Имя' 
                    id='titleName'
                    ref={ref} 
                />

                <br/>

                <button onClick={keyPress} className='popup_nameButton'>Conferm</button>
            </div>
        </div>
    );
  }