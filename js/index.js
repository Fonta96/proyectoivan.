//Declaracion de lista de precio
const listaDePrecio = {
    "remera1":3000,
    "remera2":3200,
    "remera3":2000,
    "tasa1":1000,
    "tasa2":1500,
    "funko1":5000,
    "funko2":5500,
    "funko3":6000
}
//variable
let carritoDeCompras = []
//Carga de lista en el Storage
let carritoEnLs = JSON.parse(localStorage.getItem("Carrito"))

//revisa si la lista existe, caso que exista carga el carrito de compras en el storage
if (carritoEnLs != null) {
    carritoDeCompras = carritoEnLs
}
// Limpia la lista del Storage
function limpiarCarrito() {
    localStorage.clear("Carrito")
}
//Declaracion del objeto
class objetoProducto{
   
    constructor(_nombre,_precio){
        this.nombre = _nombre
        this.precio = _precio
    }
} 
//funcion de carga de los productos
function cargarProducto(producto) {
    carritoDeCompras.push(new objetoProducto(producto,listaDePrecio[producto]))
    localStorage.setItem("Carrito", JSON.stringify(carritoDeCompras))    
}

//funcion carga los productos en el popup
function CargarCheckout(){
    document.querySelector("[name='carrito']").innerHTML=""
    carritoDeCompras.forEach(producto => {
        document.querySelector("[name='carrito']").innerHTML+="<div> <div style='display:inline-block'>"+producto.nombre+"</div> <div style='display:inline-block'>"+producto.precio+"</div> <div style='display:inline-block'><a onClick='deleteProduct(`"+producto.nombre+"`)'>Delete</a></div> </div>"
    });
}

//funcion que borra el producto seleccionado
function deleteProduct(nombreDeProducto){
    index=null
    carritoDeCompras.forEach(producto => {
        if (producto.nombre==producto) {
            index=carritoDeCompras.indexOf(producto)
        }
    });
    carritoDeCompras.splice(index,1)
    localStorage.setItem("Carrito", JSON.stringify(carritoDeCompras))  
    CargarCheckout()
}

//calcular precio total

function calcularPrecioTotal() {
    precioTotal=0
    carritoDeCompras.forEach(producto => {
        precioTotal+=producto.precio
    });
    document.querySelector("[name='carrito']").innerHTML+="<div> <div style='display:inline-block'>Precio Total</div> <div style='display:inline-block'>"+precioTotal+"</div> <div style='display:inline-block'> </div>"
}


