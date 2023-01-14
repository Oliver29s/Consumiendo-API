let contenedor = document.querySelector(".shop-items");
let textoTotal = document.querySelector(".cart-total-price");
let contenedorCarta = document.querySelector(".shop-item")
let carrito = document.querySelector(".cart-items");
let arrayCarrito = {};
let total = 0;


let apisRest = await fetch("https://api.escuelajs.co/api/v1/products");
let rest = await apisRest.json();
let productos = rest.slice(0, 8);
console.log(productos);

function imprimirCartas() {
  let html = "";
  productos.forEach(function ({ id, title, images, price }) {
    html += `
      <div class="shop-item" id="${id}">
            <span class="shop-item-title">${title}</span>
            <img class="shop-item-image" src="${images}">
        <div class="shop-item-details">
            <span class="shop-item-price">$${price}</span>
            <button class="btn btn-primary shop-item-button"  " type="button">ADD TO CART</button>
        </div>
      </div>
      `;
    contenedor.innerHTML = html;
  });
}

imprimirCartas();


// boton.forEach((btn) => {
//   btn.addEventListener("click", (item) => {
//     let acutalID = parseInt(item.target.parentNode.parentNode.id);
//     let actualProducto = productos.find((item) => item.id == acutalID);
//     console.log(actualProducto);

//     if (actualProducto.cantidad === undefined) {
//       actualProducto.cantidad = 1;
//     }
//     let existe = false;
//     arrayCarrito.forEach((item) => {
//       if (acutalID == item.id) {
//         existe = true;
//       }
//     });
//     if (existe) {
//       actualProducto.cantidad++;
//     } else {
//       arrayCarrito.push(actualProducto);
//     }

//     getTotal();
//     dibujarItem();
//   });
// });
// function getTotal() {
//   let sumTotal;
//   let total = arrayCarrito.reduce((sum, item) => {
//     sumTotal = sum + item.cantidad * item.price;
//     return sumTotal;
//   }, 0);
//   textoTotal.innerText = `$${total}`;
// }

function dibujarItem() {
  let html = " ";
  arrayCarrito.forEach(({images,title,price,cantidad}) => {
    html += `
     <div class="cart-row">
                 <div class="cart-item cart-column">
                     <img class="cart-item-image" src="${images}" width="100" height="100">
                     <span class="cart-item-title">${title}</span>
                 </div>
                 <span class="cart-price cart-column">$${price * cantidad}</span>
                 <div class="cart-quantity cart-column">
                      <input class="cart-quantity-input" min="1" type="numbers" value="${cantidad}">
                      <button class="btn btn-danger" type="button">REMOVE</button>
                 </div> 
                  
      </div>`;
    carrito.innerHTML = html;
  });
}

contenedor.addEventListener('click',function(e){
  if(e.target.classList.contains('shop-item-button')){
       let totalId= Number(e.target.parentElement.parentElement.id);
       productos.find(function(producto){
          console.log( producto.id === totalId)
       })

  }
})

