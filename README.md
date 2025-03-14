# Superheroes API

Este es un proyecto de backend desarrollado con **Node.js**, **Express**, **MongoDB**, **Mongoose** y **CORS**, que implementa un CRUD completo para gestionar una lista de **superhéroes**. La API permite realizar diversas operaciones, como agregar, eliminar, actualizar y listar héroes, junto con consultas estáticas adicionales como la búsqueda de héroes mayores de 30 años o por atributos específicos.

## Arquitectura del Proyecto

Este proyecto sigue una **arquitectura en capas** para mantener una separación clara de responsabilidades y facilitar su mantenimiento y escalabilidad. Los principales componentes son:

- **Modelos**: Define la estructura de los datos que se almacenan en la base de datos (en este caso, los superhéroes).
- **Controladores**: Gestionan las solicitudes HTTP y orquestan la respuesta, pasando la lógica de negocio a los servicios correspondientes.
- **Servicios**: Contienen la lógica de negocio, procesando los datos antes de enviarlos a los controladores o interactuar con los repositorios.
- **Repositorios**: Interactúan directamente con la base de datos, realizando las operaciones CRUD sobre los datos.
- **Rutas**: Definen los endpoints de la API y mapean las solicitudes HTTP a las funciones de los controladores.

## Funcionalidades

La API proporciona las siguientes funcionalidades:

1. **Agregar un héroe**: Se agrega un héroe mediante una solicitud `POST` con datos en formato JSON.
2. **Eliminar un héroe por ID**: Se elimina un héroe de la base de datos mediante su ID con una solicitud `DELETE`.
3. **Actualizar un héroe por ID**: Se actualizan los datos de un héroe mediante su ID con una solicitud `PUT` con datos en formato JSON.
4. **Listar todos los héroes**: Se obtienen todos los héroes de la base de datos con una solicitud `GET`.
5. **Listar héroes mayores de 30 años**: Se filtran y listan los héroes cuya edad sea mayor a 30 años.