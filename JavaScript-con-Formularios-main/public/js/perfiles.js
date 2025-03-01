
// Función para mostrar los perfiles almacenados en el LocalStorage

function mostrarPerfiles() {
    const perfiles = JSON.parse(localStorage.getItem('perfiles')); // Capturamos los datos del LocalStorage
    const contenedor = document.getElementById('row');
    perfiles.forEach((perfil) => {
        const div = document.createElement('div');      // Creamos un elemento div
        div.classList.add("card");                      // Agregamos la clase 'card' al elemento div
        div.classList.add("col-md-4");
        div.innerHTML = `
                <div class="card-header">
                    Perfil de usuario
                </div>
                <div class="card-body">
                    <h4 class="card-title">${perfil.nombre} ${perfil.apellido}</h4>
                    <h5 class="card-title">${perfil.profesion}</h5>
                    <p class="card-text">${perfil.correo} - ${perfil.telefono}</p>
                    <a href="index.html" class="btn btn-primary">Agregar otro</a>
                </div>
        `;
        contenedor.appendChild(div);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    mostrarPerfiles();
});