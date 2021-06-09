module.exports = function(sequelize, dataTypes){
    // Definir un alias.
    let alias = 'User'; // Con este alias Sequelize va a poder identificar internamente al archivo de modelo.

    // Describir la configuracion de las columnas de la tabla.
    let cols = {
        id:{
            autoincremente: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        username:{
            type: dataTypes.INTEGER,
        },
        email:{
            type: dataTypes.INTEGER,
        },
        phoneNumber:{
            type: dataTypes.DECIMAL,
        },
        dateOfBirth:{
            type: dataTypes.DATE,
        },
        password:{
            type: dataTypes.INTEGER,
        }
    };
    
    let config = {
        table: 'users',
        timestamps: true, // Si la tabla no tiene los campos created_at y updated_at.
        underscored: false, // Si los nombres de las columna en la db tienen guiones bajos en el lugar de camelCase.
    }
    const User = sequelize.define(alias,cols,config);

    User.associate = function(models){
        User.hasMany(models.Product, {
            as: "product",
            foreignKey:"userId" 
        }),
        User.hasMany(models.Coment, {
            as:"coment",
            foreignKey:"userId"
        })
    }
    return User;
}