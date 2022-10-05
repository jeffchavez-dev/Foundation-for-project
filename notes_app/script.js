const addBtn = document.querySelector('.add')
const editBtn = document.querySelector('.edit')
const deleteBtn = document.querySelector('.delete')
const notesEl = document.querySelector('.notes')
const main = notesEl.querySelector('.main')
const textArea = notesEl.querySelector('textarea')

editBtn.addEventListener('click', () => {
    main.classList.toggle('hidden')
    textArea.classList.toggle('hidden')
})

textArea.addEventListener('input', (e) => {
    const value = e.target.value; // destructuring syntax = const { value } = e.target;
    main.innerHTML = marked(value);

})


// <div class="notes">
// <div class="tools">
//     <i class="fa-solid fa-pen-to-square edit"></i>
//     <i class="fa-solid fa-trash-can delete"></i>
//     <i class="fa-sharp fa-solid fa-xmark"></i>
// </div>
// <div class="main hidden"></div>
// <textarea placeholder="Type your notes here"></textarea>

// </div>