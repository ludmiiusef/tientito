  // boton para barra de navegacion
  const showNavBtn = document.getElementById("showNavBtn");
  const navigationBar = document.querySelector("nav");

  showNavBtn.addEventListener("click", function() {
    navigationBar.classList.toggle("hidden");
  });
  const productosExisten = JSON.parse(localStorage.getItem('productos'));
const productosDefecto = [
    { id: 1, nombre: "CAMISA OLD MONEY", precio: 55000, imagen: "/assets/imagen ropa/camisa.png", descripcion: "Camisa de lino para verano." },
    { id: 2, nombre: "CAMISA BORDO", precio: 85000, imagen: "/assets/imagen ropa/camisa1.png", descripcion: "Camisa de lino para verano." },
    { id: 3, nombre: "CAMISA NEGRA RAYAS", precio: 65000, imagen: "/assets/imagen ropa/camisa3.png", descripcion: "Camisa vintage, perfecta para combinar con cualquier estilo." },
    { id: 4, nombre: "LENTE RETRO", precio: 19000, imagen: "/assets/imagen ropa/lente.png", descripcion: "Lente retro con protector RYU y super livianos." },
    { id: 5, nombre: "LENTE NEGRO SLIM", precio: 30000, imagen: "/assets/imagen ropa/lente1.png", descripcion: "Lente slim negro cómodos y super combinables." },
    { id: 6, nombre: "LENTE PILOTO", precio: 25000, imagen: "/assets/imagen ropa/lente2.png", descripcion: "Lentes de aluminio artesanales importados de Alemania." },
    { id: 7, nombre: "CAMISA BLANCA", precio: 45000, imagen: "/assets/imagen ropa/remera.png", descripcion: "Camisa blanca de los 80s, perfecta para un estilo casual." },
    { id: 8, nombre: "CHOMBA VERDE", precio: 70000, imagen: "/assets/imagen ropa/remera2.png", descripcion: "Chomba verde, ideal para combinar con camisas." },
    { id: 9, nombre: "SWEATER OLD", precio: 29800, imagen: "/assets/imagen ropa/sweter.png", descripcion: "Sweater de lana, perfecta para días fríos." }
];

let productos;
if (productosExisten) {
    productos = productosExisten;
} else {
    productos = productosDefecto;
    localStorage.setItem("productos", JSON.stringify(productos));  // Guardar productos por defecto en localStorage
}

// Renderizar productos en la página
function renderizarProductos() {
    const contenedor = document.getElementById("productos-container");
    contenedor.innerHTML = "";

    productos.forEach(producto => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("product-card");

        tarjeta.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <div class="info">
                <h3>${producto.nombre}</h3>
                <p class="price">Desde $ ${producto.precio.toLocaleString()}</p>
                <button onclick="abrirModal(${producto.id})">Ver Más</button>
            </div>
        `;

        contenedor.appendChild(tarjeta);
    });
}

// Abrir modal con información del producto
function abrirModal(idProducto) {
    const producto = productos.find(p => p.id === idProducto);
    if (producto) {
        document.getElementById("modal-image").src = producto.imagen;
        document.getElementById("modal-name").textContent = producto.nombre;
        document.getElementById("modal-description").textContent = producto.descripcion;
        document.getElementById("modal-price").textContent = Precio;{producto.precio.toLocaleString()};

        const modal = document.getElementById("modal");
        modal.classList.add("show");
    }
}

// Cerrar modal con transición
function cerrarModal() {
    const modal = document.getElementById("modal");
    modal.classList.remove("show");
}

document.getElementById("close-button").addEventListener("click", cerrarModal);

// Cargar productos al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    renderizarProductos();
});