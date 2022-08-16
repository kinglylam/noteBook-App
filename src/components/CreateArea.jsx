import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Fab from "@material-ui/core/Fab";

function CreateArea(props) {
  const [isExpanded, setIsExtended] = useState(false)
    const [inputNotes, setInputNotes] = useState({
        title:"",
        content:""
    });

    function changeHandler(event){
        const {name, value}= event.target
        setInputNotes((prevValues) => {
            return {
                ...prevValues,
                [name]: value
            }
        })
    }

    function submitNote(event){
        props.onAdd(inputNotes)
        setInputNotes({
            title:"",
            content:""
        })
        event.preventDefault();
    }

    function expand(){
      setIsExtended(true)
    }

  return (
    <div>
      <form className="create-note">
      {isExpanded && <input 
        onChange={changeHandler} 
        name="title" placeholder="Title" 
        value={inputNotes.title} /> }
        
        <textarea 
        onClick={expand} onChange={changeHandler} 
        name="content" placeholder="Take a note..."
         rows={isExpanded? 3: 1} 
         value={inputNotes.content} />
        <button onClick={submitNote}>{isExpanded? <i class="bi bi-plus-lg"></i>: null}</button>
      </form>
    </div>
  );
}

export default CreateArea;
