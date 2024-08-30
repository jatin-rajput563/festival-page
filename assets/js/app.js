const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
    myInput.focus()
})
const myModalEl = document.getElementById('myModal')
myModalEl.addEventListener('hidden.bs.modal', event => {
    // do something...
})