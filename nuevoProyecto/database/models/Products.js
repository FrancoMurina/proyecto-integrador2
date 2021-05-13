module.exports = function(sequelize, dataTypes){
    let alias = 'Products';

    let cols = {
        id:{
            autoincremente: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        userId:{
            type: dataTypes.INTEGER,
        },
        productName:{
            type: dataTypes.INTEGER,
        },
        img:{
            type: dataTypes.INTEGER,
        },
        createdAt:{
            type: dataTypes.DATE,
        },
        
        
    };
    let config = {
        table: 'products',
        timestamps: false, // Si la tabla no tiene los campos created_at y updated_at.
        underscored: false, // Si los nombres de las columna en la db tienen guiones bajos en el lugar de camelCase.
    }
    const Products = sequelize.define(alias,cols,config);

    return Products;
}