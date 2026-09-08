let form = document.querySelector("form")
let inp1 = document.getElementById('inp1')
let inp2 = document.getElementById('inp2')

let userContainer    = document.querySelector('.users')





form.addEventListener("submit", function(){
    event.preventDefault();
  let name = inp1.value
  let email = inp2.value

  let card = document.createElement('div')
  card.className= 'users_card'
let img = document.createElement('img')
let nameText = document.createElement("p")
let emailText = document.createElement("p")
 
img.src = "assets/defaultuserpfp.jpg"
nameText.textContent = name
emailText.textContent = email

card.appendChild(img)
card.appendChild(nameText)
card.appendChild(emailText)

userContainer.appendChild(card)

  form.reset() 

})