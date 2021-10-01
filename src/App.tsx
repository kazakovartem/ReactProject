import React, { useState } from 'react';
import './App.css';
import {NameForm} from './components/name';
import {BoardCard} from './components/board';

function App() {
  const [modalActive, setModalActive] = useState(false);
  const [nameOwner, setNameOwner] = useState('');
  const addHandler = (title:string)=>{
    setNameOwner(title);
  }

  return (
    <div className="App">
      <header className="App_header">
        Trello Board
      </header>
      <div className="App-body">
        <BoardCard nameOwner= {nameOwner} setNameOwner = {setNameOwner}/>
      </div>
      <NameForm onAdd = {addHandler} active={modalActive} setActive ={setModalActive} />
    </div>
  );
}

export default App;
