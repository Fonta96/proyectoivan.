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


