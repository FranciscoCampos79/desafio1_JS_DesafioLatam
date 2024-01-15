const precio = 1000

const precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

const total = document.querySelector('.valor-total')
const cantidad = document.querySelector('.cantidad')
const sumar = document.querySelector('.boton1')
const restar = document.querySelector('.boton2')

sumar.addEventListener('click', function(){
    cantidad.innerHTML = parseInt(cantidad.innerHTML) + 1;
    total.innerHTML = precio * parseInt(cantidad.innerHTML)
})

restar.addEventListener('click', function(){
    if (parseInt(cantidad.innerHTML) > 0) {
        cantidad.innerHTML = parseInt(cantidad.innerHTML) - 1;
        total.innerHTML = precio * parseInt(cantidad.innerHTML)
    }
  
})