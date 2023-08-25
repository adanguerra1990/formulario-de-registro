const datos = {
    nombre: "",
    apellido: "",
    email: "",
    password: ""
}

// hace referencia a los ID del HTML
let id = (id) => document.getElementById(id);

// hace referencia a las Clases del HTML
let clases = (clases) => document.getElementsByClassName(clases);


const formulario = id('formulario');
const inputNombre = id('nombre');
const inputApellido = id('apellido');
const inputEmail = id('email');
const inputPassword = id('password');
const mensajeError = clases('mensaje-error');
const iconoError = clases('icono-error');
const iconoCheck = clases('icono-check');
const mensajeEnviado = clases('msnEnviado');
console.dir(password)

inputNombre.addEventListener('input', leerTextos)
inputApellido.addEventListener('input', leerTextos)
inputEmail.addEventListener('input', leerTextos)
inputPassword.addEventListener('input', leerTextos)

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault()



    if (!validarFormulario()) {
        mostrarAlerta(inputNombre, 0, 'Firts Name cannot be empty');
        mostrarAlerta(inputApellido, 1, 'Last Name cannot be empty');
        mostrarAlerta(inputEmail, 2, 'Looks like this is not an email');
        mostrarAlerta(inputPassword, 3, 'Password cannot be empty');

        return
    } else {
        mostrarAlerta(inputNombre, 0, 'completo');
        mostrarAlerta(inputApellido, 1, 'completo');
        mostrarAlerta(inputEmail, 2, 'completo');
        mostrarAlerta(inputPassword, 3, 'completo');
    }
    console.log('validaaaaa')

})


function leerTextos(evento) {
    datos[evento.target.id] = evento.target.value
    console.log(evento.target.value)
}

function validarFormulario() {
    const { nombre, apellido, email, password } = datos;
    const values = [nombre, apellido, email, password];

    return values.every(value => value.trim() !== '');
}

function mostrarAlerta(id, indice, mensaje) {
    if (id.value.trim() === '') {
        mensajeError[indice].innerHTML = mensaje;
        id.style.border = '2px solid #ff7a7a';

        iconoError[indice].style.opacity = '1';
        iconoCheck[indice].style.opacity = '0';

        setTimeout(() => {
            id.classList.add('transition');
            iconoError[indice].classList.add('transition');
            id.style.border = '2px solid hsl(248, 44%, 92%)'
            iconoError[indice].style.opacity = '0';
            mensajeError[indice].innerHTML = ''
        }, 3000);
    } else {
        mensajeError[indice].innerHTML = '';
        id.style.border = "2px solid #38cc8c";

        iconoError[indice].style.opacity = '0';
        iconoCheck[indice].style.opacity = '1';

        setTimeout(() => {
            id.classList.add('transition');
            iconoCheck[indice].classList.add('transition');
            id.style.border = '2px solid hsl(248, 44%, 92%)'
            iconoCheck[indice].style.opacity = '0';            
        }, 3000);
    }
}