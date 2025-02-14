import classes from "./Note.module.css"

interface Props {
    content: string;
    id: number;
    setFunc: React.Dispatch<React.SetStateAction<never[]>>
}

export function Note (props:Props) {

    function deleteNote() {

        fetch(`http://localhost:7070/notes/${props.id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        }).then(response => {
            if (!response.ok) {
                console.log('Сетевая ошибка');
            }
            console.log(response)
        }).then(() => {
            fetch('http://localhost:7070/notes')
            .then(response => {
                if (!response.ok) {
                    console.log('Сетевая ошибка');
                }
                return response.json();
            })
            .then(data => props.setFunc(data))
            
        })

        

        
    }
    return (
        <div className={classes["note"]}>
         <div>{props.content}</div>
         <button onClick={() => {deleteNote()}}>X</button>
        </div>
       
    )
}