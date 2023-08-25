# Frontend Mentor - Intro component with sign up form

![Design preview for the Intro component with sign up form coding challenge](./design/desktop-preview.jpg)

## Bienvenidos! 👋

 En estos deafio me enfoco en aprendrer, practicar mis habilidades con Vanilla JavaScript y dar una pequeña reseña de como esta funcionando el codigo creado.
 
 El código proporcionado es un código JavaScript que se encarga de la validación de formularios. Aquí tienes una explicación detallada del código:

1. El código define un objeto llamado `datos` que sirve como contenedor para los datos del formulario. Tiene propiedades para `nombre`, `apellido`, `email` y `password`. Los valores iniciales de estas propiedades son cadenas vacías.

2. El código define dos funciones flecha `id` y `clases` que se utilizan para obtener elementos HTML por sus IDs y clases, respectivamente. Estas funciones utilizan los métodos `document.getElementById` y `document.getElementsByClassName`.

3. El código asigna los elementos HTML a variables utilizando las funciones `id` y `clases`. Las variables son:
   - `formulario`: Representa el elemento del formulario con el ID 'formulario'.
   - `inputNombre`, `inputApellido`, `inputEmail`, `inputPassword`: Representan los elementos de entrada con los respectivos IDs.
   - `mensajeError`: Representa una colección de elementos con la clase 'mensaje-error'.
   - `iconoError`: Representa una colección de elementos con la clase 'icono-error'.
   - `iconoCheck`: Representa una colección de elementos con la clase 'icono-check'.
   - `mensajeEnviado`: Representa una colección de elementos con la clase 'msnEnviado'.

4. El código adjunta escuchadores de eventos a los eventos `input` de los elementos de entrada. Cuando el usuario escribe en los campos de entrada, se llama a la función `leerTextos`. Esta función actualiza la propiedad correspondiente en el objeto `datos` con el valor ingresado.

5. El código adjunta un escuchador de eventos para el evento `submit` del formulario. Cuando se envía el formulario, se ejecuta la función de devolución de llamada del escuchador de eventos. Esta función evita el comportamiento de envío de formulario predeterminado utilizando `evento.preventDefault()`.

6. Dentro de la función de devolución de llamada del escuchador de eventos de envío, el código llama a la función `validarFormulario` para validar el formulario. La función `validarFormulario` verifica si todos los campos del formulario tienen un valor no vacío utilizando el método `every` en un array de valores de los campos del formulario.

7. Si el formulario no es válido, el código llama a la función `mostrarAlerta` para cada campo de entrada no válido. La función `mostrarAlerta` muestra un mensaje de error, cambia el color del borde del campo de entrada y muestra/oculta iconos según la validez del campo.

8. Si el formulario es válido, el código llama a la función `mostrarAlerta` para cada campo de entrada válido para mostrar un mensaje de éxito.

9. Por último, el código registra un mensaje en la consola.

El código utiliza escuchadores de eventos, manipulación del DOM y manipulación de objetos para manejar la validación del formulario y mostrar mensajes apropiados. Sigue un enfoque modular al definir funciones reutilizables para manejar diferentes aspectos de la validación del formulario.
