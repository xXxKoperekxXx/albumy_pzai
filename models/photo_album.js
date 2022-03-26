const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('photo_album', {
    photo_album_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    album_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'album',
        key: 'album_id'
      }
    },
    photo_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'photo',
        key: 'photo_id'
      }
    }
  }, {
    sequelize,
    tableName: 'photo_album',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "photo_album_id" },
        ]
      },
      {
        name: "album_id",
        using: "BTREE",
        fields: [
          { name: "album_id" },
        ]
      },
      {
        name: "photo_id",
        using: "BTREE",
        fields: [
          { name: "photo_id" },
        ]
      },
    ]
  });
};
