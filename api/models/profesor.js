'use strict';
module.exports = (sequelize, DataTypes) => {
  const profesor = sequelize.define('profesor', {
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    dni: DataTypes.STRING,
    id_materia: DataTypes.INTEGER
  }, {tableName: 'profesor'});
  profesor.associate = function(models) {
  	profesor.belongsTo(models.materia
    ,{
      as : 'Materia-Relacionada',
      foreignKey: 'id_materia'
    })
  };
  return profesor;
};