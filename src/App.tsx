import React, { useState } from 'react';
import { NameForm } from './components/NameForm/NameForm';
import { BoardCard } from './components/BoardCard/BoardCard';
import styled from 'styled-components';

function App(): JSX.Element {
    const [modalActive, setModalActive] = useState(false);

    return (
        <>
            <Header>Trello Board</Header>

            <Main>
                <BoardCard />
            </Main>

            <NameForm active={modalActive} onSetActive={setModalActive} />
        </>
    );
}

export default App;

const Header = styled.header`
    width: 100%;
    font-size: 48px;
    text-decoration: black;
    text-align: center;
    background-color: rgb(162, 211, 204);
    position: relative;
`;

const Main = styled.main`
    height: 100%;
    width: 100%;
    background-color: #61dafb;
    display: flex;
    justify-content: center;
    position: relative;
`;
