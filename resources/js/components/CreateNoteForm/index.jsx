import React, { useState, useContext } from 'react';

import { NotesContext, ADD_NOTE } from '../../context/NotesContext';
import './styles.scss';

const CreateNoteForm = () => {
  const [noteState, dispatch] = useContext(NotesContext);
  const [titleVisible, setTitleVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  let titleField;
  let backDrop;
  let textField;

  if (titleVisible) {
    titleField = (
      <input
        name="title"
        placeholder="Title"
        onChange={e => setTitle(e.currentTarget.value)}
        value={title}
      />
    );

    backDrop = (
      <div className="backdrop" onClick={() => setTitleVisible(false)} />
    );
  } else {
    titleField = '';
    backDrop = '';
  }

  const createNote = e => {
    e.preventDefault();

    if (title || note) {
      const newNote = {
        id: noteState.length,
        title: title,
        note: note,
      };

      dispatch({ type: ADD_NOTE, note: newNote });
      setTitleVisible(false);
      setTitle('');
      setNote('');
    }
  };

  if (note.length > 0) {
    textField = 'form__textarea textarea__content';
  } else {
    textField = 'form__textarea';
  }

  return (
    <div className="section__create">
      {backDrop}
      <form className="form__container" onSubmit={createNote}>
        {titleField}
        <textarea
          name="createNote"
          placeholder="Take a note..."
          className={textField}
          onFocus={() => setTitleVisible(true)}
          onChange={e => setNote(e.currentTarget.value)}
          value={note}
        />
        <button type="submit">
          <span>+</span>
        </button>
      </form>
    </div>
  );
};

export default CreateNoteForm;
