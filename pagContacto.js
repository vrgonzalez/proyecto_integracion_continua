document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el envío tradicional del formulario

    // Obteniendo los valores de los campos del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('celular').value;
    const message = document.getElementById('mensaje').value;

    // Guardar en localStorage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('celular', phone);
    localStorage.setItem('mensaje', message);

    alert('Datos guardados.');
});
