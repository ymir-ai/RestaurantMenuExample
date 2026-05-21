# Junior 1 - Login con Tailwind

Esta carpeta contiene una actividad simple para practicar maquetado con
`HTML + Tailwind CSS + JavaScript`.

## Archivos

- `index.html`: base para practicar. Tiene la estructura, el contenido y los
  TODOs para completar las clases de Tailwind.
- `resolved.html`: archivo de trabajo para resolver la actividad.
- `logo.svg`: logo usado como primer item visual del login.
- `resolved copy.html`: referencia local resuelta. Debe quedar fuera de Git.

## Objetivo

Construir un login que cumpla con lo siguiente:

- tarjeta centrada en medio de la pantalla
- minimo 4 elementos con bordes redondeados usando clases `rounded-*`
- logo arriba como primer elemento dentro del `form`
- labels y campos alineados uno al lado del otro
- campos de `Usuario` y `Contrasena`
- placeholders visibles
- uso de `label`, `for`, `id` y `required`
- boton `Ingresar` con hover, transicion suave y pequena escala
- colores definidos usando utilidades de Tailwind y una paleta clara
- fondo con color o gradiente definido
- responsividad sin overflow de textos en uso normal
- distintos tamanos tipograficos y distintas familias de fuente de Tailwind
- mensaje `login-message` al loguearse correctamente

## Flujo sugerido

- trabajar directamente sobre `resolved.html`
- usar `index.html` como guia de estructura y checklist
- comparar de manera local con `resolved copy.html`
- no subir `resolved copy.html` al repositorio

## Reglas de la practica

- usar Tailwind CSS desde la CDN
- no escribir CSS manual para resolver el layout
- mantener HTML semantico
- agregar un pequeno comportamiento en JavaScript para el submit

## Sugerencia de trabajo

1. Abrir `index.html`.
2. Definir una paleta coherente con utilidades de Tailwind.
3. Completar las clases de Tailwind que faltan.
4. Verificar que el primer hijo del `form` sea el logo.
5. Agregar hover y transicion al boton.
6. Comparar el resultado con `resolved.html`.
7. Correr las pruebas para validar estructura y comportamiento.

## Criterios que validan los tests

- Existe una configuracion o paleta de colores entendible por Tailwind.
- El fondo tiene un color o gradiente definido.
- El formulario tiene logo arriba y este aparece primero en el `form`.
- Hay al menos 4 usos de `rounded-*`.
- Los campos de acceso tienen `label`, `placeholder` y `required`.
- Las filas de campos usan una grilla o layout alineado para `label + input`.
- El boton tiene `transition` y un efecto hover con elevacion o escala.
- La maqueta usa clases de tipografia como `font-sans`, `font-serif`,
  `font-mono`, `text-sm`, `text-xl`, `text-4xl` o equivalentes.
- Existe un `#login-message` que se muestra al enviar correctamente.
- La tarjeta evita desbordes normales en mobile con `max-w-*`,
  `overflow-hidden`, `break-words` o clases similares.

## Tests

Desde la raiz del proyecto:

```bash
npm test
```

Esto ejecuta:

- Jest para validar estructura y contenido de `junior1`
- Playwright para comprobar el render y el submit de `resolved.html`

Importante:

- los tests estan pensados como meta de la actividad
- si `resolved.html` esta incompleto, varias pruebas van a fallar hasta que el
  alumno termine el trabajo
