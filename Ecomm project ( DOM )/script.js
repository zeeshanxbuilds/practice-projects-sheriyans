const createBtn = document.querySelector('#create');
const formDiv = document.querySelector('.form');


createBtn.addEventListener('click', () => {
    formDiv.style.display = 'flex';
})

// window.addEventListener('click', () => {

//     if(formDiv.style.display === 'flex'){
//         formDiv.style.display = 'none';
//     }
// })