import './App.css';
import './index.css';
import NotesList from './components/NoteList';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import Note from './components/Note';
import Search from './components/Search';

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

  const [searchText, setSearchText] = useState(' ');


  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter( (note) => note.id !== id );
    setNotes(newNotes)
  }

  return (
    <div className="App">
      
      <h1>Notey</h1>

      <Search handleSearchNote = {setSearchText}></Search>

      <div className="container">
        <NotesList 
          notes = {notes.filter((note) => note.text.toLowerCase().includes(searchText))} 
          handleAddNote = {addNote}
          handleDeleteNote={deleteNote} >
        </NotesList>
      </div>
    
    </div>
  );
}

export default App;