
import { useState } from 'react'
import './App.css'
import { AddNote } from './components/AddNote'
import { NotesList } from './components/NotesList'
import { Note } from './components/Note'

interface Element {
  content: string;
  id: number;
}



function App() {

  const [arrNotes, setArrNotes] = useState([])

  if (arrNotes.length === 0) {

    fetch('http://localhost:7070/notes')
      .then(response => {
        if (!response.ok) {
          console.log('Сетевая ошибка');
        }
        return response.json();
      })
      .then(data => setArrNotes(data))
  }

  return (
    <>
      <NotesList setFunc={setArrNotes}>
        {arrNotes.map((element:Element, index) => {
          return <Note content={element.content} id={element.id} setFunc={setArrNotes} key={index} />
        })}
      </NotesList>

      <AddNote setFunc={setArrNotes}></AddNote>
    </>
  )
}

export default App
