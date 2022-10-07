//Declaracion de lista de precio
let listaDePrecio = {
    remera1:"error",
    remera2:"error",
    remera3:"error",
    tasa1:"error",
    tasa2:"error",
    funko1:"error",
    funko2:"error",
    funko3:"error"
}
//funcion para actualizar precios.
function actualizarPrecio(name,json,item){
    document.querySelector("[name='"+name+"']").innerHTML="$ " + json.base_price
    switch (item) {
        case "remera1":
            listaDePrecio.remera1 = json.base_price
            break;
        case "remera2":
            listaDePrecio.remera2 = json.base_price
            break;
        case "remera3":
            listaDePrecio.remera3 = json.base_price
            break;
        case "tasa1":
            listaDePrecio.tasa1 = json.base_price
            break;
        case "tasa2":
            listaDePrecio.tasa2 = json.base_price
            break;
        case "funko1":
            listaDePrecio.funko1 = json.base_price
            break;
        case "funko2":
            listaDePrecio.funko2 = json.base_price
            break;
        case "funko3":
            listaDePrecio.funko3 = json.base_price
            break;
    }
    
}

//fetch de precios 
fetch('https://api.mercadolibre.com/items/MLA1108283081')
  .then((response) => response.json())
  .then((json) => actualizarPrecio("remeraAxl",json,"remera1"));
  

  fetch('https://api.mercadolibre.com/items/MLA930482122')
  .then((response) => response.json())
  .then((json) => actualizarPrecio("remeraNegra",json,"remera2"));

  fetch('https://api.mercadolibre.com/items/MLA711958218')
  .then((response) => response.json())
  .then((json) => actualizarPrecio("remeraMujer",json,"remera3"));

  fetch('https://api.mercadolibre.com/items/MLA1115995304')
  .then((response) => response.json())
  .then((json) => actualizarPrecio("tasaNegra",json,"tasa1"));

  fetch('https://api.mercadolibre.com/items/MLA1119871116')
  .then((response) => response.json())
  .then((json) => actualizarPrecio("tasaMagic",json,"tasa2"));

  fetch('https://api.mercadolibre.com/items/MLA1132891449')
  .then((response) => response.json())
  .then((json) => actualizarPrecio("funkoAxl",json,"funko1"));

  fetch('https://api.mercadolibre.com/items/MLA1111407951')
  .then((response) => response.json())
  .then((json) => actualizarPrecio("funkoSlash",json,"funko2"));

  fetch('https://api.mercadolibre.com/items/MLA1149079629')
  .then((response) => response.json())
  .then((json) => actualizarPrecio("funkoDuff",json,"funko3"));

  

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
        document.querySelector("[name='carrito']").innerHTML+="<div> <div style='display:inline-block'>"+producto.nombre+"</div> <div style='display:inline-block'>"+producto.precio+"</div> <div style='display:inline-block'><a class='delete' onClick='deleteProduct(`"+producto.nombre+"`)'>Delete</a></div> </div>"
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