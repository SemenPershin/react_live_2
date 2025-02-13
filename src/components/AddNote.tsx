


export function AddNote(props) {

    function addNew(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const sendObj = JSON.stringify({ "id": 0, "content": formData.get("text") })

        fetch('http://localhost:7070/notes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: sendObj
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
        <div>
            <div>New Note</div>
            <form onSubmit={(e) => { addNew(e) }}>
                <textarea name="text"></textarea>
                <button>{">>>"}</button>
            </form>
        </div>
    )
}