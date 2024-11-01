document.querySelectorAll('.filtro-btn').forEach(button => { 
    /*devuelve lista de elementos que coincide con el atributo*/
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        const productos = document.querySelectorAll('.producto');

        productos.forEach(producto => {
            if (category === 'todos' || producto.getAttribute('data-category') === category) {
                producto.style.display = 'block'; // Mostrar producto
            } else {
                producto.style.display = 'none'; // Ocultar producto
            }
        });
    });
});
    // Función para mostrar productos en el HTML
    function mostrarProductos() {
        const mainContainer = document.querySelector('main');
        
        productos.forEach(producto => {
            const productoHTML = `
                <div class="producto">
                    <div class="imagen">
                        <img src="${producto.imagenPrincipal}" alt="${producto.nombre}" class="main-image">
                        <div class="imagenes">
                            ${producto.imagenes.map(img => `<img src="${img}" alt="${producto.nombre}">`).join('')}
                        </div>
                    </div>
                    <div class="detalles">
                        <h2>${producto.nombre}</h2>
                        <h3>$${producto.precio.toLocaleString()}</h3>
                        <p>Incluye: ${producto.descripcion}</p>
                        <a id="buy-button" href="${producto.linkCompra}" class="buy-btn">
                            Comprar
                        </a>
                    </div>
                </div>
            `;
            mainContainer.innerHTML += productoHTML;
        });
    }
    
    // Ejecuta la función al cargar el DOM
    document.addEventListener("DOMContentLoaded", mostrarProductos);
    
            mainContainer.innerHTML += productoHTML;
        ;
    
    
    // Ejecuta la función al cargar el DOM
    document.addEventListener("DOMContentLoaded", mostrarProductos);
    

