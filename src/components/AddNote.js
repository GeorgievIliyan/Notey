import { useState } from "react";

const AddNote = ( {handleAddNote }) => {
    
    const [noteText, setNoteText] = useState('');

    const characterLimit = 200;

    const handleChange = (event) => {
        if (characterLimit - event.target.value.length >= 0){
            setNoteText(event.target.value);
        }
    };

    const handleSaveClick = () => {
        if (noteText.trim().length > 0){
            handleAddNote(noteText);
            setNoteText('');
        }
        else{
            alert('You can\'t add blank notes!');
        }
    };

    return (
        <div className="note new">
            <textarea 
                rows="8" cols="10" 
                value={noteText}
                onChange={handleChange}>
            </textarea>
            <div className="note-footer">
                <small>{ characterLimit - noteText.length} Remaining</small>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    )
}

export default AddNote;