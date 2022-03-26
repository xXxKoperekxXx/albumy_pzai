var DataTypes = require("sequelize").DataTypes;
var _album = require("./album");
var _comment = require("./comment");
var _location = require("./location");
var _photo = require("./photo");
var _photo_album = require("./photo_album");
var _photo_tag = require("./photo_tag");
var _tag = require("./tag");

function initModels(sequelize) {
  var album = _album(sequelize, DataTypes);
  var comment = _comment(sequelize, DataTypes);
  var location = _location(sequelize, DataTypes);
  var photo = _photo(sequelize, DataTypes);
  var photo_album = _photo_album(sequelize, DataTypes);
  var photo_tag = _photo_tag(sequelize, DataTypes);
  var tag = _tag(sequelize, DataTypes);

  photo_album.belongsTo(album, { as: "album", foreignKey: "album_id"});
  album.hasMany(photo_album, { as: "photo_albums", foreignKey: "album_id"});
  photo.belongsTo(location, { as: "location", foreignKey: "location_id"});
  location.hasMany(photo, { as: "photos", foreignKey: "location_id"});
  comment.belongsTo(photo, { as: "photo", foreignKey: "photo_id"});
  photo.hasMany(comment, { as: "comments", foreignKey: "photo_id"});
  photo_album.belongsTo(photo, { as: "photo", foreignKey: "photo_id"});
  photo.hasMany(photo_album, { as: "photo_albums", foreignKey: "photo_id"});
  photo_tag.belongsTo(photo, { as: "photo", foreignKey: "photo_id"});
  photo.hasMany(photo_tag, { as: "photo_tags", foreignKey: "photo_id"});
  photo_tag.belongsTo(tag, { as: "tag", foreignKey: "tag_id"});
  tag.hasMany(photo_tag, { as: "photo_tags", foreignKey: "tag_id"});

  return {
    album,
    comment,
    location,
    photo,
    photo_album,
    photo_tag,
    tag,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
