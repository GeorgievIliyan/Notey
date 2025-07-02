import './App.css';
import NotesList from './components/NoteList';

function App() {
  return (
    <div className="App">
      <h1>Notey</h1>
      <div className="container">
        <NotesList></NotesList>
      </div>
    </div>
  );
}

export default App;