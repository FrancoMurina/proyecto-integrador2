module.exports = function(sequelize, dataTypes){
    let alias = 'Product';

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
       
        
        
    };
    let config = {
        table: 'products',
        timestamps: true, // Si la tabla no tiene los campos created_at y updated_at.
        underscored: false, // Si los nombres de las columna en la db tienen guiones bajos en el lugar de camelCase.
    }
    const Product = sequelize.define(alias,cols,config);

    Product.associate = function(models){
        Product.belongsTo(models.User, {
            as:"user",
            foreignKey:"userId"
        })
        Product.hasMany(models.Coment, {
            as: "coments",
            foreignKey: "" //Revisar
        })
    }

    return Product;
}