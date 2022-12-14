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

    if(lastValue == 0) {
        cartModalContainer.innerHTML = '<p class = "cart-empty">Your cart is empty. </p>';
    }
    else {
        drawProductModal();
    }
});


// 5. Cambiar imagenes cuando se presione el boton flecha.

const imageContainer = document.querySelector('.gallery__image-container');
const nextBtn = document.querySelector('.gallery__next');
const previousBtn = document.querySelector('.gallery__previous');
let imgIndex = 1;

nextBtn.addEventListener('click', () => {
    changeNextImage(imageContainer);
});

previousBtn.addEventListener('click', () => {
    changePreviousImage(imageContainer);
});


// 6. Mostrar el modal de imagenes cuando hago click en la imagen principal. DESKTOP

const imageModal = document.querySelector('.modal-gallery__background');
const closeModalIcon = document.querySelector('.modal-gallery__close')

imageContainer.addEventListener ('click', () => {
    imageModal.style.display = 'grid';
});

closeModalIcon.addEventListener('click', () => {
    imageModal.style.display = 'none';
});

// ... Cambiar las imagenes principales en la portada dando click en ellas.

//no-list
let galleryThumnails = document.querySelectorAll('.gallery__thumnails'); 
//lo convertimos a un array.
galleryThumnails = [...galleryThumnails];

galleryThumnails.forEach(thumnail =>{
    thumnail.addEventListener('click' , event => {
        imageContainer.style.backgroundImage = `url('../images/image-product-${event.target.id}.jpg')`;
    });
});

// ... Cambiar las imagenes principales de la portada en el MODAL.
const modalImageContainer = document.querySelector('.modal-gallery__image-container');
let portadaThumnails = document.querySelectorAll('.modal-gallery__thumnails');
portadaThumnails = [...portadaThumnails];

portadaThumnails.forEach(portadaThumnails => {
    portadaThumnails.addEventListener('click', eventModal => {
        modalImageContainer.style.backgroundImage = `url('../images/image-product-${eventModal.target.id.slice(-1)}.jpg')`;
    });
});


//Cambiar imagen principal del modal desde las flechas en el modal.

const modalNextBTN = document.querySelector('.modal-gallery__next');
const modalPreviousBTN = document.querySelector('.modal-gallery__previous');

modalNextBTN.addEventListener('click', () => {
    changeNextImage(modalImageContainer);
});

modalPreviousBTN.addEventListener('click', () => {
    changePreviousImage(modalImageContainer);
});


//Mostrar el navbar cuando se presiona el menú de hamburguesa

const burguerMenu = document.querySelector('.header__menu'); 
const modalNavbar = document.querySelector('.modal-navbar__background');
const closeModalNavbar = document.querySelector('.modal-navbar__close');

modalNavbar.style.display = 'none';

burguerMenu.addEventListener('click', () => {
    modalNavbar.style.display = 'block';
});

closeModalNavbar.addEventListener('click', () => {
    modalNavbar.style.display = 'none';
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

//Logica de cambiar imagenes con flechas.

function changeNextImage(imgContainer) {
    
    if (imgIndex == 4) {
        imgIndex = 1;
    } else {
        imgIndex++;
    }
    imgContainer.style.backgroundImage = `url('../images/image-product-${imgIndex}.jpg')`;
};

function changePreviousImage(imgContainer) {
    
    if (imgIndex == 1) {
        imgIndex = 4;
    } else {
        imgIndex--;
    }
    imgContainer.style.backgroundImage = `url('../images/image-product-${imgIndex}.jpg')`;
};


