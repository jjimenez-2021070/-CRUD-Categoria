const { response, request } = require('express');

//Importacion del modelo
const Categoria = require('../models/categoria');
const { Promise } = require('mongoose');
const categoria = require('../models/categoria');


const getCategoria = async(req = request, res = response) => {

    res.json({
        msg: 'get Api - Controlador Categoria',
    });
}

const postCategoria = async (req = request, res = response) => {

    //Desestructuración
    const {nombreCategoria, descripcion} = req.body;
    const CategoriaGuardadoDB = new Categoria ({nombreCategoria, descripcion});
   
    //Guardar en DB
    await CategoriaGuardadoDB.save();


    res.json({
        msg: 'POST',
        CategoriaGuardadoDB
    });
}


const putCategoria = async(req = request, res = response) => {

    //re,params sirve para traer parametros
    const { id } = req.params;
    const { _id,...resto } = req.body;
    

    //Editar al usuario por el id
    const categoriaEditado = await Categoria.findByIdAndUpdate(id, resto);

    res.json({
        msg: 'put editar categoria',
        id,
        categoriaEditado
    })
}

const deleteCategoria = async(req = request, res = response) => {
    //Req.params sirve para traer parametros de las rutas
    const { id } = req.params;
    const categoriaEliminado = await Categoria.findByIdAndDelete(id)

    res.json({
        msg: 'delete categoria user',
        id,
        categoriaEliminado
    })
}


module.exports = {
    getCategoria,
    postCategoria,
    putCategoria,
    deleteCategoria
}




