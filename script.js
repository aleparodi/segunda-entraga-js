class Productos {
    constructor(nombre, marca , precio, stock) {
        this.nombre = nombre
        this.marca = marca
        this.precio = precio
        this.stock = stock
    }
}

let producto= []
if(localStorage.getItem ('storageProducto')){
 producto = JSON.parse (localStorage.getItem('storageProducto'))

}else {
localStorage.setItem('storageProducto', JSON.stringify(producto))

 }

 const form = document.getElementById('idForm')
 const divProductos = document.getElementById('divProductos')
 
 form.addEventListener('submit', (e) =>{
     e.preventDefault()
     let nombre = document.getElementById('idNombre').value
     let marca = document.getElementById('idMarca').value
     let precio = parseFloat(document.getElementById('idPrecio').value)
     let stock = parseInt(document.getElementById('idStock').value)
     const productos = new Productos(nombre, marca, precio, stock)
     producto.push(productos)
     localStorage.setItem('storageProducto', JSON.stringify(producto))
     form.reset()
})

botonProductos.addEventListener('click', ()=> {
     let productoStorage = JSON.parse(localStorage.getItem('storageProducto'))
    divProductos, innerHTML= ""
    
     productoStorage.forEach((productos,indice) => {

    
     divProductos.innerHTML += `
       <div class="card border-primary mb-3" id="productos${indice}" style= "width: 18rem; margin: 4px;"> 
         <div class="card-body">
         <h5 class="card-title">${productos.nombre}</h5>
         <p class="card-text">Marca: ${productos.marca}</p>
         <p class="card-text">$${productos.precio}</p>
         <p class="card-text">Stock: ${productos.stock}</p>
         <button class="btn btn-danger">Eliminar</button>
        </div>
      </div>
 `    
  
})

productoStorage.forEach((producto, indice) => {
document.getElementById(`productos${indice}`).lastElementChild.lastElementChild.addEventListener('click', () => {
document.getElementById(`productos${indice}`).remove()
producto.splice(indice, 1)
localStorage.setItem('storageProducto', JSON.stringify(producto))

})
})
})
