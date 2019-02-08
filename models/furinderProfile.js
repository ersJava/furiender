
var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
    var FurinderProfile = sequelize.define("FurinderProfile", {
      
    //   id: {
    //       type: DataTypes.INTEGER,
    //       primaryKey: true,
    //       autoIncrement: true
          

    //   },

      name: {
          type: DataTypes.STRING,
          allowNull: true,


      },

      age: {
        type: DataTypes.INTEGER,
        allowNull: true
    },

      petName: {
          type: DataTypes.STRING,
          allowNull: true,

      },

      locationByBoroughs: {
          type: DataTypes.STRING,
          allowNull: true
      },

      breed: {
        type: DataTypes.STRING,
        allowNull: true
      },


      petAge: {
        type: DataTypes.INTEGER,
        allowNull: true
    },

      weight: {
          type: DataTypes.INTEGER,
          allowNull: true
      },

      

      energy: {
          type: DataTypes.INTEGER,
          allowNull: true
      },

      funFacts: {
          type: DataTypes.INTEGER,
          allowNull: true
      },

      favoriteFood: {
          type: DataTypes.STRING,
          allowNull: true
      },

      favoriteToy: {
          type: DataTypes.STRING,
          allowNull: true
      },

      favoritePark: {
        type: DataTypes.STRING,
        allowNull: true
      },

      createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    
        updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
      }

    });
  
    return FurinderProfile;
};



/*
use pet_profileDB;

insert into furinderProfiles (name, petName, locationByBoroughs, breed, weight, age, energy, funFacts, favoriteFood, favoriteToy, favoritePark)

values 
 
("Shakib", "yo", "Queens", "asdf", 12, 5, 8, 9, "biscuits", "ball", "dsfafa");
*/