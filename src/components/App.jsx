import React, {useState} from "react";
import Header from "./Header.jsx";
import Note from "./Note.jsx";
import Footer from "./Footer.jsx";
import CreateArea from "./CreateArea.jsx";

function App(){
    const [notes, setNotes] = useState([]);

    function addNotes(inputNotes){
        setNotes(prevNotes => {
            return [...prevNotes, inputNotes]
            
        })    
    }

    function deleteNote(id){
        setNotes(prevNotes => {
            return prevNotes.filter((note, index) => {
              return index !== id;
            });
          });
    }
    
    return <div>
        <Header />
        <CreateArea onAdd={addNotes} />
        <div>
       { notes.map((note, index) => {
          return  <Note 
            key={index} 
            id={index} 
            title={note.title} 
            content={note.content}
            onChecked={deleteNote}    
            />
        }) }
        </div>
        <Footer />
    </div>
}

export default App;