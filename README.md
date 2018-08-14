
# Workflow Gulp Starter Kit

* [Inicio](#workflow-gulp-starter-kit)
* [Para comenzar](#para-comenzar)
* [Estructura del kit](#estructura-del-kit)


Kit de inicio para desarrollo frontend (HTML, Sass y JS) basado en componentes y automatizado con Gulp desarrollado.

Después de HTML5, los [componentes web](https://www.webcomponents.org/) son el siguiente gran salto en el paradigma del desarrollo web frontend, pero [aun no están listos](http://caniuse.com/#search=components), sin embargo con herramientas como Node, Gulp, Sass, PostCSS, UnCSS, Browser-sync, entre algunos otros, podemos desarrollar proyectos con la filosofía de reutilización y componetización que proponen los componentes web, sin necesidad de usar frameworks y librerías robustas como [Angular](https://angular.io/), [React](https://facebook.github.io/react/), [Vue.js](https://vuejs.org/) o [Polymer](https://www.polymer-project.org/).

Además este kit tiene la filosofía de generar un sólo archivo **CSS** gracias a los **imports** de **Sass**, un sólo archivo **JavaScript** principal y un archivo recursos js contatenado y minificado con los plugins requeridos gracias a **Gulp**, adicionalmente se utilizará **Pug** como el sistema de plantillas html.


## Para comenzar:

Sólo ejecuta los siguientes comandos:

* **`npm install`** Para instalar todas las dependencias. (node_modules)
* **`gulp files`** Para generar imagenes, fuentes, js-recursos y páginas esáticas.
* **`gulp`** Para comenzar a trabajar proyectos frontend. (Se levanta un servidor web live reload con Browser Sync donde compila archivos HTML, SCSS y JS)


## Estructura del kit:

### Carpetas:

#### :file_folder: ***src***:

Es el directorio donde tendremos los archivos del proyecto en fase de desarrollo, y se estructura de la siguiente manera:

* :file_folder: ***img***: Contendrá las imágenes del proyecto sin optimizar.
* :file_folder: ***js***: Contendrá los archivos JS.
  * :page_facing_up: **`main.js`**: Es el archivo principal JS del proyecto.
  *  :page_facing_up: **`recursos.js`**: Es el archivo con los recursos JS, que serán compilados  y unificados con **Gulp**.
* :file_folder: ***scss***: Contendrá los archivos **.scss** que compilarán a un solo archivo CSS.
  * :file_folder: ***base***:
    * :page_facing_up: **`_variables.scss`**: Es el archivo que contendrá las variables del proyecto.
    * :page_facing_up: **`_reset.scss`**: Es el archivo que contendrá los estilos de reseteo y normalización para todos los navegadores.
    * :page_facing_up: **`_mixins.scss`**: Es el archivo que contendrá los mixins de sass.
    * :page_facing_up: **`_fonts.scss`**: Es el archivo que contendrá los fuentes.
  * :file_folder: ***componentes***: 
    * :page_facing_up: **`_bottoms.scss`**: Es el archivo que contendrá los estilos de los botones.
    * :page_facing_up: **`_helpers.scss`**: Es el archivo que contendrá clase de ayuda.
   * :file_folder: ***pages***:
     * :page_facing_up: **`_home.scss`**: Es el archivo que contendrá los estilos del home.
   * :file_folder: ***sections***: 
     * :page_facing_up: **`_header.scss`**: Es el archivo que contendrá los estilos del header.
     * :page_facing_up: **`_footer.scss`**: Es el archivo que contendrá los estilos del footer.
  * :page_facing_up: **`style.scss`**: Es el archivo principal SCSS del proyecto que compilara a CSS de forma modular con las dependencias que se necesite en  ***node_modules***.
* :file_folder: ***pug***: Contendrá los archivos **.pug** que compilarán a archivos HTML.
  * :file_folder: ***includes***: 
       * :page_facing_up: **`header.pug`**: Es el archivo que contendrá la estructura del header.
       * :page_facing_up: **`footer.pug`**: Es el archivo que contendrá la estructura del footer.
       * :page_facing_up: **`favicon.pug`**: Es el archivo que contendrá la estructura del favicon.
  * :file_folder: ***templates***: 
       * :page_facing_up: **`main-template.pug`**: Es el archivo que contendrá la estructura base del HTML.
   * :file_folder: ***View***: 
       * :page_facing_up: **`index.pug`**: Es el archivo que contendrá la estructura de cada página HTML.

#### :file_folder: ***public***:

Es el directorio donde tendremos la versión final del proyecto con todos los archivos HTML generados, las imágenes optimizadas y archivos estáticos requeridos, así como un sólo archivo CSS llamado **`./css/main.css`**, un archivo JS llamado **`./js/main.js`** , que contendrán toda la presentación,  programación respectivamente y  un archivo JS llamado **`./js/recursos.js`** , que contendrán los plugins requeridos.


### Archivos:

* :page_facing_up: **`package.json`**: Contiene la configuración del proyecto, en el podrás ver todas las dependencias y los scripts NPM programados del kit.
* :page_facing_up: **`.gitignore`**: Indica que archivos y directorios ignorará Git al momento de sincronizar el proyecto, la configuración que se propone ha sido generada en el sitio [gitignore.io](https://www.gitignore.io/) y es esta: [osx,node,macos,linux,windows,visualstudiocode](https://www.gitignore.io/api/osx,node,macos,linux,windows,visualstudiocode) siéntete libre de modificarla a tus necesidades.
* :page_facing_up: **`.editorconfig`**: Contiene la definición de la configuración para mantener la codificación estándar entre diferentes editores e IDEs, considera que en algunos editores tendrás que instalar un plugin adicional para que funcione, consulta el sitio [editorconfig.org](http://editorconfig.org/) para saber si tu editor o ide lo soporta nativamente o requiere algún plugin.
* :page_facing_up: **`gulpfile.js`**: Contiene la programación JS de las tareas gulp.
* :page_facing_up: **`README.md`**: Contiene la documentación de este kit.

**[:arrow_upper_left: regresar al índice](#workflow-gulp-starter-kit)**
