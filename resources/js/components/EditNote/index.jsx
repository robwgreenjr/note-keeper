import React, { useState, useContext } from 'react';

import { EditContext } from '../../context/EditContext';
import {
  NotesContext,
  UPDATE_NOTE,
  DELETE_NOTE,
} from '../../context/NotesContext';
import './styles.scss';

const EditNote = ({ setEditStatus }) => {
  const [edit, setEdit] = useContext(EditContext);
  const [noteState, dispatch] = useContext(NotesContext);

  const currentEditNote = noteState.filter(note => note.id === edit);

  const [editTitle, setEditTitle] = useState(currentEditNote[0].title);
  const [editNote, setEditNote] = useState(currentEditNote[0].note);

  const deleteNote = e => {
    e.preventDefault();
    dispatch({ type: DELETE_NOTE, note: currentEditNote[0] });
    setEditStatus(false);
  };

  const closeEdit = e => {
    e.preventDefault();
    if (editTitle || editNote) {
      const updatedNote = {
        id: edit,
        title: editTitle,
        note: editNote,
      };

      dispatch({ type: UPDATE_NOTE, note: updatedNote });
    }

    setEditStatus(false);
  };

  return (
    <div className="edit__backdrop">
      <div
        className="backdrop"
        style={{ zIndex: 105 }}
        onClick={() => setEditStatus(false)}
      ></div>
      <div className="edit__container">
        <form className="edit__form">
          <input
            name="editTitle"
            onChange={e => setEditTitle(e.currentTarget.value)}
            value={editTitle}
          />
          <textarea
            name="editNote"
            className="form__textarea"
            onChange={e => setEditNote(e.currentTarget.value)}
            value={editNote}
          />
          <footer className="edit__footer">
            <button onClick={e => deleteNote(e)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="grey"
              >
                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
                <path d="M0 0h24v24H0z" fill="none"></path>
              </svg>
            </button>
            <button onClick={e => closeEdit(e)}>
              <span>Done</span>
            </button>
          </footer>
        </form>
      </div>
    </div>
  );
};

export default EditNote;
