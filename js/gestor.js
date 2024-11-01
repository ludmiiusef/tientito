const productForm = document.getElementById('productForm');
const productTableBody = document.getElementById('productTable').querySelector('tbody');

// Cargar productos desde localStorage al iniciar
let viajesBD = JSON.parse(localStorage.getItem("viajes")) || [];
    
    const categoria = document.getElementById('categoria').value;
    const imagen = document.getElementById('imagen').value;
    const nombre = document.getElementById('nombre').value;
    const precio = parseFloat(document.getElementById('precio').value);

    if (imageFile) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const imageSrc = event.target.result;
            saveProduct(name, description, price, imageSrc);
        };
        reader.readAsDataURL(imageFile);
    }
;

function saveProduct(name, description, price, imageSrc) {
    const products = JSON.parse(localStorage.getItem('productos')) || [];
    const newProduct = { id: products.length + 1, nombre: name, descripcion: description, precio: price, imagen: imageSrc };
    products.push(newProduct);
    localStorage.setItem('productos', JSON.stringify(products));

    // Redirigir a index.html
    window.location.href = 'index.html' ;  

}





// Función para renderizar los productos en la tabla
function renderProductos() {
    // Limpiar el contenido de la tabla
    productTableBody.innerHTML = "";

    // Recorrer cada producto en viajesBD y agregar una fila a la tabla
    viajesBD.forEach((producto) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${producto.categoria}</td>
            <td><img src="${producto.imagen}" alt="${producto.nombre}" style="width: 50px; height: auto;"> ${producto.nombre}</td>
            <td>$${producto.precio.toFixed(2)}</td>
        `;
        productTableBody.appendChild(row);
    });
}

// Cargar productos al iniciar la página
renderProductos();

// Escuchar el evento de envío del formulario para agregar un nuevo producto
productForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario
    // Crear un objeto con esos datos
    const nuevoProducto = {
        categoria: categoria,
        imagen: imagen,
        nombre: nombre,
        precio: precio,
    };

    // Agregar el objeto nuevo a viajesBD
    viajesBD.push(nuevoProducto);

    // Guardar en localStorage
    localStorage.setItem("viajes", JSON.stringify(viajesBD));

    // Limpiar el formulario
    productForm.reset();

    // Renderizar productos de nuevo
    renderProductos();

    // Mostrar mensaje de éxito
    alert('Producto agregado exitosamente!');
});

