import React, { useRef } from 'react';
import { INameUserProps } from './INameUserProps';
import styled from 'styled-components';

const ConfButton = styled.button`
    background-color: #61dafb;
    border-radius: 12px;
    height: 32px;
    width: 100px;
    &:hover {
        color: #fdfcfc;
        background-color: #2485a0;
    }
`;

const PopupForm = styled.div`
    height: 380px;
    width: 500px;
    background-color: #fdfcfc;
    border-radius: 12px;
    padding: 20px;
    font-size: 55px;
`;

const Input = styled.input`
    border-radius: 6px;
    font-size: 22px;
`;

const NamePopup = styled.div`
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

export const NameForm = ({ onAddNameUser, active, onSetActive }: INameUserProps) => {
    const nameUserRef = useRef<HTMLInputElement>(null);

    const handleAddNameUser = (): void => {
        if (nameUserRef.current!.value !== '') {
            onAddNameUser(nameUserRef.current!.value);
            nameUserRef.current!.value = '';
            onSetActive(true);
        }
    };

    return (
        <NamePopup theme={{ active: active }}>
            <PopupForm>
                <label htmlFor="titleName"> Enter you name :</label>

                <br />

                <Input type="text" required placeholder="Имя" id="titleName" ref={nameUserRef} />

                <br />

                <ConfButton type="button" onClick={handleAddNameUser}>
                    Confirm
                </ConfButton>
            </PopupForm>
        </NamePopup>
    );
};
