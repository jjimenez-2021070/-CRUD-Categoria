//Importaciones de nodejs
const express = require('express');
const cors = require('cors');
const { dbConection } = require('../database/config');


class Server {

    constructor(){
        //Configuración inicial
        this.app = express();
        this.port = process.env.PORT;
        this.categoriasPath = '/api/categorias';

        this.conectarDB()

        // Middlewares
        this.middlewares();


        //Rutas de mi app
        this.routes();

    }

    //Funcion de conxion
    async conectarDB (){
        await dbConection();
    }

    middlewares(){

        // CORS
        this.app.use( cors() );

        // Lectura y parseo del Body
        this.app.use( express.json() );

        //Directorio publico
        this.app.use(  express.static('public') );

    }


    routes(){
       this.app.use( this.categoriasPath, require('../routes/categoria') );
    }


    listen(){
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto ', this.port);
        } )
    }


}


//Importacion de la clase Server
module.exports = Server;