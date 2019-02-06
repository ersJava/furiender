var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
    var UserLogin = sequelize.define("UserLogin", {
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: true,
                
            }
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                isEmail: true
            }
        },
        userPassword: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
            },

        createdAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
            },
            
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
            }
        }
    );
    
    console.log("Hello");
    UserLogin.create({
        userName: 'snihank',
        email: 'nihan@yahoo.com',
        userPassword: '1234'
    }).then(function(data){
        // console.log(data.get(UserLogin));
        console.log("hey");
    
    });
    console.log("Hello");

    

    return UserLogin;

    

};

/*
use pet_profileDB;

insert into userLogins (username, email, userPassword) values

("Shakib", "shakib@gmail.com", "12345"),
("Beth", "beth@gmail.com", "123456"),
("Omar", "omar@gmail.com", "1234567"),
("Dan", "dan@gmail.com", "12345678"),
("Tracy", "tracy@gmail.com", "123456789")
;
*/

