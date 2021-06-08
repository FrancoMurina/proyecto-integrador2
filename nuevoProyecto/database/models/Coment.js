module.exports = function(sequelize, dataTypes){
    let alias = 'Coment';

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
        
    };
    let config = {
        table: 'coments',
        timestamps: true, // Si la tabla no tiene los campos created_at y updated_at.
        underscored: false, // Si los nombres de las columna en la db tienen guiones bajos en el lugar de camelCase.
    }
    const Coment = sequelize.define(alias,cols,config);

    Coment.associate = function(models){
        Coment.belongsTo(models.Product, {
            as: "product",
            foreignKey: "productId"
        })
        Coment.belongsTo(models.User, {
            as: "user",
            foreignKey: "userId"
        })
    }

    return Coment;
}