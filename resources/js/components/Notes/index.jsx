import React, { useState, useContext } from 'react';

import { NotesContext } from '../../context/NotesContext';
import EditNote from '../EditNote';
import Note from '../Note';
import './styles.scss';

const Notes = () => {
  const [noteState, dispatch] = useContext(NotesContext);
  const [editStatus, setEditStatus] = useState(false);

  let edit = <div style={{ display: 'none' }}></div>;

  if (editStatus) {
    edit = <EditNote setEditStatus={setEditStatus} />;
  }

  return (
    <div className="notes__container">
      {edit}
      {noteState.map((note, index) => {
        return (
          <Note
            title={note.title}
            note={note.note}
            id={note.id}
            key={index}
            setEditStatus={setEditStatus}
          />
        );
      })}
    </div>
  );
};

export default Notes;
