import './App.css';
import './index.css';
import NotesList from './components/NoteList';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import Search from './components/Search';

function App() {
  const [notes, setNotes] = useState([]);

  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    try {
      const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
      if (savedNotes) {
        setNotes(savedNotes);
      }
    } catch (error) {
      console.error("Failed to load notes from localStorage:", error);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes) )
  }, [notes]);

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

      <div className='header'>
        <h1>Notey</h1>
      </div>

      <Search handleSearchNote = {setSearchText}></Search>

      <div className="container">
        <NotesList
          notes = {notes.filter((note) => note.text.toLowerCase().includes(searchText.toLowerCase()))}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote} >
        </NotesList>
      </div>

    </div>
  );
}

export default App;