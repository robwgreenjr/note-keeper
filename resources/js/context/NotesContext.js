import React, { useReducer, createContext } from 'react';

const NotesContext = createContext();

const ADD_NOTE = 'ADD_NOTE';
const UPDATE_NOTE = 'UPDATE_NOTE';
const DELETE_NOTE = 'DELETE_NOTE';

const addNoteToList = (newNote, state) => {
  return [newNote, ...state];
};

const updateNoteInList = (note, state) => {
  const updatedNoteIndex = state.findIndex(oldNote => oldNote.id === note.id);

  state[updatedNoteIndex] = note;

  return [...state];
};

const deleteNoteInList = (note, state) => {
  const updatedNoteIndex = state.findIndex(oldNote => oldNote.id === note.id);

  state.splice(updatedNoteIndex, 1);

  return [...state];
};

const notesReducer = (state, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return addNoteToList(action.note, state);
    case UPDATE_NOTE:
      return updateNoteInList(action.note, state);
    case DELETE_NOTE:
      return deleteNoteInList(action.note, state);
    default:
      return state;
  }
};

const NotesProvider = ({ children }) => {
  const [noteState, dispatch] = useReducer(notesReducer, []);

  return (
    <NotesContext.Provider value={[noteState, dispatch]}>
      {children}
    </NotesContext.Provider>
  );
};

export { NotesProvider, NotesContext, ADD_NOTE, UPDATE_NOTE, DELETE_NOTE };
