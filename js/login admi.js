document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional.

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error');

    // Simulación de validación de login (esto debería ser reemplazado por una API real).
    if (email === 'ludmila@gmail.com' && password === '88888') {
        // Redirige a la página de gestión de productos.
        window.location.href = '\getor produc.html'; // Cambia esto a la ruta real.
    } else {
        // Muestra mensaje de error y reinicia el formulario.
        errorMessage.textContent = 'Correo electrónico o contraseña incorrectos.';
        document.getElementById('loginForm').reset();
    }
});