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
    const productos = JSON.parse(localStorage.getItem('productos')) || [];
    localStorage.removeItem('productolocal')
    localStorage.setItem('productos',producto1)
    cargarProductos();
}
window.onload = () => {
    cargarProductos();
   };