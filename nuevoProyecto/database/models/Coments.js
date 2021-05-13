module.exports = function(sequelize, dataTypes){
    let alias = 'Coments';

    let cols = {
        id:{
            autoincremente: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        produtId:{
            type: dataTypes.INTEGER,
        },
        userId:{
            type: dataTypes.INTEGER,
        },
        textoComentario:{
            type: dataTypes.INTEGER,
        },
        createdAt:{
            type: dataTypes.DATE,
        }
    };
    let config = {
        table: 'coments',
        timestamps: false, // Si la tabla no tiene los campos created_at y updated_at.
        underscored: false, // Si los nombres de las columna en la db tienen guiones bajos en el lugar de camelCase.
    }
    const Coments = sequelize.define(alias,cols,config);

    return Coments;
}