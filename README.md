# PRUEBA TÉCNICA ENERO 2025 - JOEL OLIVER

Este repositorio contiene una aplicación web desarrollada tipo landing page con login y registro hecha con **Vue**, que hace uso de **VeeValidate** para validaciones en los formularios y de **CSS clásico** para los estilos.

## Preview de la Aplicación

Aquí puedes ver un adelanto en producción de la pagina web.

https://prueba-tecnica-tph.vercel.app/

---

## Cómo Ejecutar en Local

Sigue estos pasos para levantar la aplicación en tu entorno local:

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/OdsenMusic/Prueba-T-cnica---TPH.git
   ```
2. **Instalar dependencias**
   ```bash
   npm install
   ```
3. **Crear y configurar el archivo .env**
   En la raíz del proyecto, crea un archivo llamado .env y añade la siguiente línea:

   VITE_API_BASE_URL=https://reqres.in

4. **Ejecuta el proyecto**
   En local
   ```bash
   npm run dev
   ```
   O en la red local
   ```bash
   npm run dev-local
   ```

## Decisiones técnicas

**Estilos (CSS)**
He decidido utilizar CSS clásico para el estilado de los componentes. No tengo experiencia previa con Vue ni con Bootstrap (aunque sí he trabajado con React y Material Design). Dado el tiempo limitado (cinco días mientras trabajo 40 horas semanales), preferí no sumergirme en aprender ambas tecnologías simultáneamente, asegurándome así de poder terminar a tiempo con la calidad requerida. Sin embargo, si el plazo fuera más extenso, sin duda valdría la pena aprender y usar Bootstrap para agilizar el estilado de los componentes a mediano y largo plazo.

**Uso de Vue**
Este es mi primer proyecto con Vue y, al igual que ocurre en React, sé que existen múltiples formas de optimizar el código (equivalentes a `useRef()`, `useMemo()`, `useCallback()`, etc.).

Sin embargo, por falta de tiempo, aún no he podido explorar en profundidad todo lo que Vue ofrece. ¡Debo decir que me ha gustado más que React en muchos aspectos!

**Arquitectura y Sistema de Archivos**
He organizado la aplicación con una estructura razonable y mantenible:

/components: Contiene componentes de uso general.
/pages: Contiene las páginas principales.
Dentro de cada página o componente específico, he creado una carpeta components/ para los subcomponentes que se utilizan únicamente en esa sección.
Sé que aún hay margen de mejora, pero mi objetivo ha sido mantener un orden que facilite la escalabilidad en el futuro.

**Validaciones y Formularios**
Nunca había utilizado VeeValidate, pero tras leer su documentación noté similitudes con React Hook Form, con la que sí estoy familiarizado. Por ello, decidí implementarlo en todos los formularios para manejar las validaciones de manera sencilla y eficiente.

## Mejoras pendientes

Quedan varias mejoras pendientes que podrían implementarse en versiones futuras, por ejemplo:

Estructura de CSS:
Crear más clases globales y utilizar variables CSS para un estilo más consistente y fácil de mantener.

Componetización de campos de formulario:
Incluir tanto el input como el ErrorMessage en un solo componente, logrando un código más limpio y fácil de mantener.

Gestión de estado:
Utilizar variables globales para el estado isLogged, de modo que sea accesible y manejable de forma centralizada.

Contenido de la landing:
Añadir más elementos y secciones a la pantalla inicial para que resulte más atractiva y menos vacía, ofreciendo más información o funcionalidades desde el primer vistazo.
