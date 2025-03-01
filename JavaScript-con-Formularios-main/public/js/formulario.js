'use strict';
const perfiles = [];

document.addEventListener('DOMContentLoaded', (ev) => {
    const formulario = document.getElementById('formulario');
    // Manejador de eventos:
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();

        const datos = new FormData(formulario);     // FormData es un objeto que permite capturar los datos de un formulario
        
        let nombre = datos.get('nombre');           // Obtiene el valor del campo 'nombre'
        let apellido = datos.get('apellido');       // Obtiene el valor del campo 'apellido'
        let profesion = datos.get('profesion');     // Obtiene el valor del campo 'prefesion'
        let correo = datos.get('email');            // Obtiene el valor del campo 'correo'
        let telefono = datos.get('telefono');       // Obtiene el valor del campo 'telefono'
        
        const usuario = {
            nombre : nombre,
            apellido : apellido,
            profesion : profesion,
            correo : correo,
            telefono : telefono
        }

        // Agregamos el usuario al arreglo de perfiles:
        perfiles.push(usuario);
        formulario.reset();     // Limpia los campos del formulario

        // Almacenamos los datos en el LocalStorage
        localStorage.setItem('perfiles', JSON.stringify(perfiles));

        console.log(perfiles);
        //window.location.href = 'perfiles.html';     // Redirecciona a la página 'perfil.html'
    });
});
