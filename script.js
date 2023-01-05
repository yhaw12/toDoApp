let formEl = document.getElementById('form');  
let InputEl = document.getElementById('input-txt');
let ulList = document.querySelector('.list');  

let iconsEl = document.querySelector('.icons');


formEl.addEventListener("submit", (e)=>{
    e.preventDefault();
    
    toDoListApp();
});


function toDoListApp(){
    const outPutTxt = InputEl.value;
    let liEl = document.createElement('li');
    liEl.textContent = outPutTxt;
    ulList.appendChild(liEl);
    InputEl.value = ""

    // buttons===========

    const chkBtnEl = document.createElement('div');
    chkBtnEl.innerHTML = '<i class="fas fa-check-square"></i>'
    liEl.appendChild(chkBtnEl);

    const trashBtnEl = document.createElement('div');
    trashBtnEl.innerHTML = '<i class="fas fa-trash"></i>';
    liEl.appendChild(trashBtnEl);


    // if statement ===========

    chkBtnEl.addEventListener('click', ()=>{
        liEl.classList.toggle('checked');   
    });

    trashBtnEl.addEventListener('click', ()=>{
        liEl.remove();

    });

  
};


// 


    




