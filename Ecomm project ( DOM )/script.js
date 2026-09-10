const createBtn = document.querySelector('#create');
const formDiv = document.querySelector('.form');
const crossButton = document.querySelector('#cross_button')
const form = document.querySelector('form')
const productDiv = document.querySelector(".products");

let productsArr = [];

let updateIndex = null;


let ui = () => {
    productDiv.innerHTML = "";
    productsArr.forEach((elem)=> {
productDiv.innerHTML += ` <div class="products_card">
                <div class="img"> <img
                        src="${elem.imageUrl}"
                        alt="Image couldnt loaded"></div>
                <div class="text">
                    <h3>${elem.productName}</h3>
                    <p>${elem.description}</p>
                    <p>${elem.price}</p>
                </div>
                <div class="btns">
                    <button id="update" onClick="updateproduct('${elem.productName}')">Update</button>
                    <button id="delete" onclick="deleteproduct('${elem.productName}')">Delete</button>
                </div>
            </div>`

    })
}


createBtn.addEventListener('click', () => {
    formDiv.style.display = 'flex';
})

crossButton.addEventListener('click', ()=> {
    formDiv.style.display = 'none'
})

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
   
        let productName = event.target[0].value
        let description = event.target[1].value
        let price = event.target[2].value
        let imageUrl = event.target[3].value

if(productName.trim() === "" || description.trim() === "" || price.trim() === "" || imageUrl.trim() === "" )
{
    
    alert("please fill all the fields");
return;

}

        let obj = {
            productName,
            description,
            price,
            imageUrl
        }

if(updateIndex !== null){
    productsArr[updateIndex] = obj;
    updateIndex = null;
}
else {
    productsArr.push(obj)
}
// console.log(productsArr)

ui();
form.reset()
formDiv.style.display = "none"
})



let updateproduct = (name) => {
    formDiv.style.display = 'flex';
    let product = productsArr.find((elem) => elem.productName === name)
    updateIndex = productsArr.findIndex((elem)=>  elem.productName === name)

    form[0].value = product.productName
    form[1].value = product.description
    form[2].value = product.price
    form[3].value = product.imageUrl
};

let deleteproduct = (name) => {
    let tempindex = productsArr.findIndex((elem)=> elem.productName === name  )
    productsArr.splice(tempindex, 1)
        
    ui()
}

