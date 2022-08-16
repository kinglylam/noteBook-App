import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={() =>{
          props.onChecked(props.id)
      }}>
       <i class="bi bi-trash-fill"></i>
      </button>
    </div>
  );
}

export default Note;