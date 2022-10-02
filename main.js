// 1.     -  0  + 

let minus = document.querySelector('.input__minus');
let value = document.querySelector('.input__number');
let plus = document.querySelector('.input__plus');

let userInputNumber = 0;

plus.addEventListener('click', () => {
     userInputNumber += 1;
     value.value = userInputNumber;
});

minus.addEventListener('click', () => {
    if (userInputNumber > 0)
        userInputNumber -= 1;
    value.value = userInputNumber;
}); 


// 2.  BTN Add to cart and carrer notification

const btnAdd = document.querySelector('.details__button');
let cartNotification = document.querySelector('.header__cart--notification');
let lastValue = parseInt(cartNotification.innerText);

btnAdd.addEventListener('click', () => {
    //lógica de agregar productos.
    lastValue += userInputNumber;
    cartNotification.innerText = lastValue;
    cartNotification.style.display = 'block'; 
    drawProductModal();
}); 


//3.  Mostrar la ventana del carrito cuando se de click, además de dinamizar los valores

const cartIconBtn = document.querySelector('.header__cart');
const cartModal = document.querySelector ('.cart-modal');
const cartModalContainer = document.querySelector('.cart-modal__checkout-container');

//toggle: si existe la clase la quito, sino existe la clase la agrego, una función para este caso.

cartIconBtn.addEventListener('click', () => {
    cartModal.classList.toggle('show');

    if(lastValue > 0) {
        drawProductModal();
    }

});



//FUNCIONES

//4. Borrar contenido del carrito

function deleteProduct() {
    const deleteCart = document.querySelector('.cart-modal__delete');

    deleteCart.addEventListener('click', () => {
        cartModalContainer.innerHTML = '<p class = "cart-empty">Your cart is empty. </p>';
        lastValue = 0;
        cartNotification.innerText = lastValue;
    });
};

function updateProduct(){
    let priceModal = document.querySelector ('.cart-modal__price');
    priceModal.innerHTML = `$125 x${lastValue} <span>$${lastValue * 125}.00</span>`;
};

function drawProductModal(){
    cartModalContainer.innerHTML = `
        <div class= "cart-modal__details-container">
        <img class="cart-modal__image" src="./images/image-product-1-thumbnail.jpg" alt="img-details">
        <div>
            <p class="cart-modal__product">
            Autumn Limited Edition...</p>
            <p class="cart-modal__price">
            $125 x3 <span>$375.00</span></p>
        </div>
        <img class="cart-modal__delete" src="./images/icon-delete.svg" alt="delete">
        </div>
        <button class="cart-modal__checkout">Checkout</button>`
    deleteProduct();
    updateProduct();
};