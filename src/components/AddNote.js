const AddNote = () => {
    return (
        <div className="note new">
            <textarea 
                rows="8" cols="10" >
            </textarea>
            <div className="note-footer">
                <small>200 Remaining</small>
                <button className="save">Save</button>
            </div>
        </div>
    )
}

export default AddNote;