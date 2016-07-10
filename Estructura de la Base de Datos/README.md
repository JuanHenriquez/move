## Move - La red social que te mueve alrededor del mundo.

### Viabilidad del Proyecto:

#### _Recursos Tecnicos:_
    
**Hardware:** 
    
Servidores que permitan escalar las gran cantidad de solicitudes simultaneas de los usuarios. Heroku y OpenShift son servicios de cloud computer que permiten este tipo de caracteristicas. Computadoras capacitadas para el trabajo, se necesita al menos procesadores i5, 8gb de memoria RAM, 125gb de SSD, una Nvidia GTX 680, buen sistema de refrigeración.

**Software:** 
    
Se tiene pensado usar para la parte del sistema de base de datos un lenguaje NoSQL llamado MongoDB debido a la alta velocidad de respuesta a las solicitudes de Escritura y Lectura, ademas es un lenguaje simple de usar basado en la syntaxis de JavaScript. Se necesita un sistema de control de versiones como GIT que permita la colaboración en conjunto con todo el equipo encargado del desarrollo.

**Humanos:** 
    
Se necesitan programadores que destanquen en el desarrollo Font-End y Back-End, con experiencia en lenguajes como JavaScript, MongoDB, SQL, HTML5, CSS3 y el uso de Frameworks como Express.js Angular.js JQuery, Bootstrap, MaterializeCSS, Gulp, entre otros para agilizar el trabajo. Diseñadores con Experiencia en Photoshop, Illustrator, UX Design, Responsive Design, etc.
    
#### _Recursos Economicos:_
    - Fron-End Junior: 15$ hora - 8 horas al dia minimo.
    - Front-End Senior: 25$ hora - 8 horas al dia minimo.
    - Back-End Junior: 18$ hora - 10 horas al dia minimo.
    - Back-End Senior: 30$ hora - 10 horas al dia minimo.
    - Diseñadores: 15$ hora - 8 horas al dia minimo.

### Entidades:

* Usuarios
    - id
    - Nombre
    - Apellido
    - Correo
    - Clave
    - Nacimiento
    - Pais
    - Telefono
    - Direccion
    - Foto de Perfil
    - Estatus

* Video 
    - id
    - id_usuario
    - video
    - link
    - duracion
    - calidad
    - fecha

* Comentario_Video
    - id
    - id_video
    - id_usuario
    - texto
    - fecha

* MeGusta_Video
    - id
    - id_video
    - id_usuario
    - fecha

* Post
    - id
    - id_usuario
    - texto
    - link
    - fecha

* Comentario_Post
    - id
    - id_post
    - id_usuario
    - texto
    - fecha

* MeGusta_Post
    - id
    - id_post
    - id_usuario
    - fecha
    
* Fotos
    - id
    - id_usuario
    - foto
    - link
    - fecha

* Comentarios_Fotos
    - id
    - id_foto
    - id_usuario
    - texto
    - fecha

* MeGusta_Fotos
    - id
    - id_foto
    - id_usuario
    - fecha
    
* Album
    - id
    - id_usuario
    - nombre
    - link
    - fecha
    
* Comentarios_Album
    - id 
    - id_album -> Album(id)
    - id_usuario
    - texto
    - fecha
    - link

* MeGusta_Album
    - id
    - id_album
    - id_usuario
    - fecha
    
* Album_fotos
    - id
    - id_album -> Album(id)
    - id_foto -> Fotos(id)
    
* Amigos
    - id
    - id_usuario -> Usuario(id).
    - id_amigo -> Usuario(id).
    - fecha
    
* Mensajes
    - id
    - id_usuario -> Usuario(id).
    - id_chat -> Chat(id)
    - texto
    - fecha
    
* Chat
    - id
    - id_usuario -> Usuario(id).
    - id_usuario_2 -> Usuario(id).
    
* Notificaciones
    - id
    - id_publicacion
    - id_tipo_notificacion
    - tiempo
    
* TipoNotificacion
    - id
    - id_notificacion
    - motivo
    
* Notificaciones_Usuarios
    - id
    - id_usuario
    - id_notificacion
    
* Grupos
    - id
    - Descripcion
    - Tiempo
    - foto_grupo
    - foto_background
    
* Grupo_Usuario
    - id
    - id_usuario
    - id_grupo

* Paginas
    - id
    - nombre
    - descripcion    
    - foto_pagina
    - foto_background
    
* Seguidores
    - id
    - id_usuario
    
* Pagina_Seguidores
    - id
    - id_usuario
    - id_pagina
    - fecha
    
* Pagina_admin
    - id
    - id_pagina
    - id_usuario
    - id_rol
