# Angular Chat

Trabajo Final Integrador — Desarrollo en Angular.

Aplicación web que simula un clon de chat, desarrollada con Angular y TypeScript. El proyecto tiene como objetivo aplicar los principales conceptos de Angular trabajados durante la cursada.

## Tecnologías

- Angular 22.1.7
- TypeScript
- HTML5
- CSS3
- Angular Router
- Reactive Forms
- Signals

## Funcionalidades

La aplicación contará con:

- Listado de conversaciones.
- Visualización del nombre, avatar y estado de cada contacto.
- Creación dinámica de nuevos chats mediante un formulario reactivo.
- Conversaciones independientes para cada chat.
- Envío de mensajes.
- Diferenciación visual entre mensajes del usuario y respuestas de la aplicación.
- Respuestas automáticas de la aplicación después de un breve intervalo.
- Validación de mensajes mediante Reactive Forms.
- Navegación mediante rutas.
- Diseño responsive para escritorio y dispositivos móviles.

### Funcionalidades opcionales

Como mejoras adicionales se podrán incorporar:

- Búsqueda de chats.
- Animaciones con CSS y/o Angular.
- Pipe personalizado para mostrar fechas.
- Signals para el manejo del estado global.

## Rutas

| Ruta         | Descripción                            |
| ------------ | -------------------------------------- |
| `/chats`     | Listado de conversaciones              |
| `/chats/:id` | Conversación correspondiente a un chat |
| `/nuevo`     | Formulario para crear un nuevo chat    |

## Estructura del proyecto

La aplicación se organizará en componentes, páginas, servicios y modelos.

- `components/` — componentes reutilizables de la interfaz.
- `pages/` — componentes asociados a las distintas vistas de la aplicación.
- `services/` — lógica y estado relacionado con los chats.
- `models/` — interfaces TypeScript para representar chats y mensajes.
- `app.routes.ts` — configuración de las rutas.
- `app.config.ts` — configuración general de la aplicación.

## Conceptos de Angular

Durante el desarrollo se aplicarán los siguientes conceptos:

- Standalone Components.
- Control de flujo moderno mediante `@if` y `@for`.
- Angular Router.
- `provideRouter`.
- Parámetros dinámicos en rutas.
- Reactive Forms.
- `FormControl`.
- Validaciones de formularios.
- Servicios.
- Interfaces TypeScript.
- Signals.

## Diseño

La interfaz utilizará CSS nativo y se construirá utilizando Flexbox y/o CSS Grid.

En escritorio se mostrará un panel lateral con el listado de chats y un panel principal con la conversación seleccionada.

En dispositivos móviles se mostrará una única vista a la vez, permitiendo navegar entre el listado de chats y la conversación.

## Instalación

Clonar el repositorio e instalar las dependencias:

    npm install

## Servidor de desarrollo

Para iniciar el servidor de desarrollo:

    ng serve

Luego abrir `http://localhost:4200/` en el navegador.

La aplicación se actualizará automáticamente al modificar los archivos.

## Build

Para generar una versión de producción:

    ng build

Los archivos generados se encuentran en el directorio `dist/`.

## Testing

Para ejecutar las pruebas:

    ng test

## Deploy

El proyecto será desplegado en una plataforma compatible con aplicaciones Angular, como Vercel o Netlify.

Se configurará el redireccionamiento necesario para que las rutas de Angular funcionen correctamente al acceder directamente a una URL.

## Commits

El desarrollo se realizará mediante commits progresivos, procurando que cada commit represente un cambio funcional o una etapa concreta del proyecto.

## Estado del proyecto

En desarrollo.

Este README se actualizará a medida que se incorporen las funcionalidades del proyecto.
