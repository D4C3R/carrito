function añadirProducto() {

     let contenidoproducto = producto1.innerText
     localStorage.setItem('productos',JSON.stringify(contenidoproducto))
    
    //cargarProductos();//
}
function cargarProductos() {
    const contenedorProductos = document.getElementById('contenedorProductos');
    const productolocal = localStorage.getItem('productos')
    contenedorProductos.innerHTML = `
            <br>
            <p>${productolocal}</p>
            <button onclick="deleteEvent()">Eliminar</button>
        `;;
    
}
function deleteEvent() {    
    let producto1 = document.getElementById("producto1")
    const productos = localStorage.getItem('productos') || [];
    localStorage.removeItem('productolocal')
    localStorage.setItem('productos',producto1)
    cargarProductos();
}
window.onload = () => {
    cargarProductos();
   };