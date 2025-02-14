import { ReactNode } from "react";
import classes from "./NotesList.module.css"

interface Props {
    setFunc: React.Dispatch<React.SetStateAction<never[]>>
    children: ReactNode
}

export function NotesList (props:Props) {
    function update () {
        fetch('http://localhost:7070/notes')
            .then(response => {
                if (!response.ok) {
                    console.log('Сетевая ошибка');
                }
                return response.json();
            })
            .then(data => props.setFunc(data))
    }

    return (
        <div>
            <button onClick={() => {update()}} className={classes["update_button"]}>Обновить</button>
            <div className={classes["notes_list"]}>{props.children}</div>
        </div>
        
    )
}