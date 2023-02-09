const { Schema, model } = require('mongoose');

const CategoriaSchema  = Schema({
    nombreCategoria: {
        type: String,        
        required: [true, 'El nombre es obligatorio']
    },
    
    descripcion: {
        type: String,
    },

    estado: {
        type: Boolean,
        default: true,
    },
   


});

module.exports = model('Categoria', CategoriaSchema);