const createBtn = document.querySelector('#create');
const formDiv = document.querySelector('.form');
const crossButton = document.querySelector('#cross_button')
const form = document.querySelector('form')

createBtn.addEventListener('click', () => {
    formDiv.style.display = 'flex';
})

crossButton.addEventListener('click', ()=> {
    formDiv.style.display = 'none'
})

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('hello')
    
    for(let i=0; i<=100; i++){
        console.log('print hello')
    }
})