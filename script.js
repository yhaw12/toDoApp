
// input function========
let formEl = document.getElementById('sm-box');
let list = document.querySelector('.list');
let input = document.getElementById('input-words');



  formEl.addEventListener("submit", (event)=>{
    event.preventDefault();

     toDoList();
});


function toDoList(){
    let newInput = input.value;
    const liEl = document.createElement('li');
    liEl.innerText = newInput
    list.appendChild(liEl)
    input.value = ''

}