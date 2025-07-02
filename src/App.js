import './App.css';
import './index.css';
import NotesList from './components/NoteList';
import { useState } from 'react';
import { nanoid } from 'nanoid';

function App() {
  /* array for notes */
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "15/04/2021",
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "16/04/2021",
    },
    {
      id: nanoid(),
      text: "This is my third note!",
      date: "17/04/2021",
    },
    {
      id: nanoid(),
      text: "This is my fourth note!",
      date: "18/04/2021",
    },
    {
      id: nanoid(),
      text: "This is my fifth note!",
      date: "19/04/2021",
    }
  ]);

  return (
    <div className="App">
      <h1>Notey</h1>
      <div className="container">
        <NotesList notes = {notes}></NotesList>
      </div>
    </div>
  );
}

export default App;