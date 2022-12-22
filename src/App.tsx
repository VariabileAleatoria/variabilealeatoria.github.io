import React from 'react';
import './App.css';
import MainCard from './components/mainHeader/MainCard';
import ContactsColumn from './components/contacts/ContactsColumn';
import CV from './components/cv/CV';

function App() {
  return (
    <div className='container'>
      <MainCard />
      <div className='content'>
        <ContactsColumn />
        <CV />
      </div>
    </div>

  );
}

export default App;
