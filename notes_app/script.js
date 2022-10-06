const addBtn = document.querySelector('.add')


addBtn.addEventListener('click',()=> {
    adddNewNote();
})


function adddNewNote(){
    const note = document.createElement('div');
    note.classList.add('note');
    

    note.innerHTML = `
            <div class="notes">
                <div class="tools">
                    <i class="fa-solid fa-pen-to-square edit"></i>
                    <i class="fa-solid fa-trash-can delete"></i>
                    <i class="fa-sharp fa-solid fa-xmark"></i>
                </div>
                <div class="main hidden"></div>
                <textarea placeholder="Type your notes here"></textarea>
            </div>
    `
    const editBtn = note.querySelector('.edit')
    const deleteBtn = note.querySelector('.delete')
    const main = note.querySelector('.main')
    const textArea = note.querySelector('textarea')


    deleteBtn.addEventListener('click', () => {
        note.remove()
    })
    editBtn.addEventListener('click', () => {
        main.classList.toggle('hidden')
        textArea.classList.toggle('hidden')
    })

    textArea.addEventListener('input', (e) => {
        const value = e.target.value; // destructuring syntax = const { value } = e.target;
        main.innerHTML = marked(value);

})
    document.body.appendChild(note);

}


