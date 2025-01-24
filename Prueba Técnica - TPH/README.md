PRUEBA TÉCNICA ENERO 2025 - JOEL OLIVER
¡Bienvenido a mi proyecto de prueba técnica!
Este repositorio contiene una aplicación web desarrollada con Vue, que hace uso de VeeValidate para validaciones en los formularios y de CSS clásico para los estilos. El proyecto consiste en demostrar mis habilidades y conocimientos en un plazo de 5 días, integrando diferentes componentes y funcionalidades.

Tabla de Contenidos
Preview de la aplicación
Cómo ejecutar en local
Decisiones Técnicas
Estilos (CSS)
Uso de Vue
Arquitectura y sistema de archivos
Validaciones y formularios
Contacto
Preview de la Aplicación
Aquí puedes ver un adelanto de cómo luce la aplicación (inserta una imagen o un GIF si lo tienes):

Cómo Ejecutar en Local
Sigue estos pasos para levantar la aplicación en tu entorno local:

Clona el repositorio

bash
Copiar
git clone https://github.com/usuario/tu-repositorio.git
cd tu-repositorio
Instala las dependencias

bash
Copiar
npm install
Crea el archivo .env
En la raíz del proyecto, crea un archivo llamado .env y añade la siguiente línea:

arduino
Copiar
VITE_API_BASE_URL=https://reqres.in
Ejecuta el proyecto
Para lanzar el servidor de desarrollo, ejecuta:

bash
Copiar
npm run dev
O si prefieres usar otro script específico para tu red local:

bash
Copiar
npm run dev-local
Una vez hecho esto, accede a la URL que te indique la consola, normalmente http://localhost:5173 (o el puerto configurado).

Decisiones Técnicas
Estilos (CSS)
He optado por usar CSS clásico para estilar los componentes. No he trabajado antes con Vue ni con Bootstrap (sí con React y Material Design). Dado el tiempo limitado (5 días mientras trabajo 40 horas semanales), preferí no aprender Vue y Bootstrap a la vez para asegurar que podría terminar con la suficiente calidad a tiempo. Si el proyecto tuviera un plazo más largo, sin duda valdría la pena aprender y usar Bootstrap para agilizar el estilado de los componentes a medio-largo plazo.

Uso de Vue
Este es mi primer proyecto con Vue y, al igual que ocurre en React, sé que existen múltiples formas de optimizar el código (equivalentes a useRef(), useMemo(), useCallback(), etc.). Sin embargo, por falta de tiempo, aún no he podido explorar en profundidad todo lo que Vue ofrece. ¡Debo decir que me ha gustado más que React en algunos aspectos!

Arquitectura y Sistema de Archivos
He intentado estructurar la aplicación de forma razonable y mantenible:

/components: Contiene los componentes generales.
/views (o similar): Contiene las páginas principales.
Dentro de cada vista o componente específico, existe una carpeta components/ para los subcomponentes que solo se usan en esa sección.
Sin duda, hay margen de mejora, pero he tratado de mantener cierto orden que facilite la escalabilidad.

Validaciones y Formularios
Nunca había utilizado VeeValidate, pero tras leer su documentación noté similitudes con React Hook Form, con la que sí estoy familiarizado. Por ello, decidí implementarlo en todos los formularios para manejar las validaciones de manera sencilla y clara.

Contacto
Si tienes alguna pregunta, sugerencia o feedback sobre este proyecto, puedes contactarme en:

Email: joel.oliver@correo.com
LinkedIn: linkedin.com/in/joel-oliver
¡Gracias por revisar mi proyecto!
