import React, { useReducer, createContext, useEffect } from 'react';
import axios from 'axios';

const NotesContext = createContext();

const ADD_NOTE = 'ADD_NOTE';
const UPDATE_NOTE = 'UPDATE_NOTE';
const DELETE_NOTE = 'DELETE_NOTE';
const SET_NOTES = 'SET_NOTES';

const setInitialNotes = (notes, state) => {
  notes.reverse()
  return [...notes];
}

const addNoteToList = (newNote, state) => {
  axios
    .post('http://api.notekeeper.test/v1/note', {
      title: newNote.title,
      note: newNote.note
    })
    .then(response => newNote.id = response.data.data.id)
    .catch(error => console.log(error))
  return [newNote, ...state];
};

const updateNoteInList = (note, state) => {
  axios
    .put('http://api.notekeeper.test/v1/note/' + note.id, {
      title: note.title,
      note: note.note
    })
    .catch(error => console.log(error))

  const updatedNoteIndex = state.findIndex(oldNote => oldNote.id === note.id);

  state[updatedNoteIndex] = note;

  return [...state];
};

const deleteNoteInList = (note, state) => {
  axios
    .delete('http://api.notekeeper.test/v1/note/' + note.id)
    .catch(error => console.log(error))
    
  const updatedNoteIndex = state.findIndex(oldNote => oldNote.id === note.id);

  state.splice(updatedNoteIndex, 1);
  return [...state];
};

const notesReducer = (state, action) => {
  switch (action.type) {
    case SET_NOTES:
      return setInitialNotes(action.notes, state);
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
  
  useEffect(() => {
    function fetchData() {
      axios
        .get('http://api.notekeeper.test/v1/notes')
        .then(response => dispatch({ type: SET_NOTES, notes: response.data.data}));
    }
    fetchData();
  },[])
  
  return (
    <NotesContext.Provider value={[noteState, dispatch]}>
      {children}
    </NotesContext.Provider>
  );
};

export { NotesProvider, NotesContext, ADD_NOTE, UPDATE_NOTE, DELETE_NOTE };
