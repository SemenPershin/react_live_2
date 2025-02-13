
import { useState } from 'react'
import './App.css'
import { AddNote } from './components/AddNote'
import { NotesList } from './components/NotesList'
import { Note } from './components/Note'

function App() {
  
  const [arrNotes, setArrNotes] = useState([])
  console.log(arrNotes)
  return (
    <>
      <NotesList>
        {arrNotes.map((element, index) => {
          return <Note content = {element.content} id = {element.id} setFunc = {setArrNotes} key={index}/>
        })}
      </NotesList>

      <AddNote setFunc = {setArrNotes}></AddNote>
    </>
  )
}

export default App
