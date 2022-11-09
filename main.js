let arrayCarrito = [];
let total = 0;
let contenedor = document.querySelector(".shop-items");

let apisRest = await fetch("https://api.escuelajs.co/api/v1/products");
let rest = await apisRest.json();
let productos = rest.slice(0, 8);
console.log(productos)

productos.forEach((element) => {
  contenedor.innerHTML += `
    <div class="shop-item" id="${element.id}">
    <span class="shop-item-title">${element.title}</span>
    <img class="shop-item-image" src="${element.images}">
    <div class="shop-item-details">
        <span class="shop-item-price">$${element.price}</span>
        <button class="btn btn-primary shop-item-button"  " type="button">ADD TO CART</button>
    </div>
</div>
    
    
    `;
});
let boton = document.querySelectorAll(".shop-item-button");
let carrito = document.querySelector(".cart-items");
boton = [...boton];
boton.forEach((btn) => {
  btn.addEventListener("click", (item) => {
    let acutalID = parseInt(item.target.parentNode.parentNode.id)
   
    let actualProducto = productos.find(item=> item.id == acutalID)
    actualProducto.cantidad = 1
    console.log(actualProducto)
    carrito.innerHTML += `
        <div class="cart-row">
                    <div class="cart-item cart-column">
                        <img class="cart-item-image" src="${actualProducto.images}" width="100" height="100">
                        <span class="cart-item-title">${actualProducto.title}</span>
                    </div>
                    <span class="cart-price cart-column">$${actualProducto.price}</span>
                    <div class="cart-quantity cart-column">
                        <input class="cart-quantity-input" min="1" type="number" value="1">
                        <button class="btn btn-danger" type="button">REMOVE</button>
                    </div>
        
        `;
  });
});
function getTotal(){
  let sumaTotal;
  carrito.innerHTML
}