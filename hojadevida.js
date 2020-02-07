//este archivo va a ejecutar toda la aplicacion
//carpeta public van todo los Recursos de la app (css, img, fuentes, bootstrap)
//carpeta views van todas las vistas del usuario

const express = require('express'),
        app = express(),
        path = require('path'); //Path es un modulo de NodeJS

    //Middleware que nos permita ubicar los archivos de la carpeta public
    app.use(express.static(path.join(__dirname,'/public')));

    //Ahora crearemos las rutas de nuestra aplicacion
    app.route('/').get((peticion, respuesta)=>{
        respuesta.sendFile(`${__dirname}/views/index.html`);
    });
    
    app.route('/descripcion').get((peticion, respuesta)=>{
        respuesta.sendFile(`${__dirname}/views/descripcion.html`);
    });

    app.route('/experiencia').get((peticion, respuesta)=>{
        respuesta.sendFile(`${__dirname}/views/experiencia.html`);
    });

    app.route('/estudios').get((peticion, respuesta)=>{
        respuesta.sendFile(`${__dirname}/views/estudios.html`);
    });

    app.route('/aptitudes').get((peticion, respuesta)=>{
        respuesta.sendFile(`${__dirname}/views/aptitudes.html`);
    });

    app.route('/contacto').get((peticion, respuesta)=>{
        respuesta.sendFile(`${__dirname}/views/contacto.html`);
    });

    app.listen(8080);
    console.log('Conexion Exitosa con el Servidor!');
