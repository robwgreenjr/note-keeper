import React from 'react';

import { NotesProvider } from './context/NotesContext';
import { EditProvider } from './context/EditContext';
import Icons from './components/Icons';
import CreateNoteForm from './components/CreateNoteForm';
import Notes from './components/Notes';
import './main.scss';

const App = () => {
  return (
    <EditProvider>
      <NotesProvider className="App">
        <Icons />
        <CreateNoteForm />
        <Notes />
      </NotesProvider>
    </EditProvider>
  );
};

export default App;
