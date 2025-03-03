const express = require('express')
const router = express.Router()
const con = require('../../database_config')
const initModels = require("../../models/init-models");
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('galeria', 'root', '', {
    host: 'localhost',
    dialect: "mysql"
});
var models = initModels(sequelize);
var Album = models.album

router.get('/', async(req, res) => {
    const albums = await Album.findAll();
    console.log(albums.every(user => user instanceof Album));
    console.log("All albums:", JSON.stringify(albums, null, 2));
    res.send(albums, null, 2)
})

router.get('/:id', async(req, res) => {
    console.log(req.params.id)
    const album = await Album.findAll({
        where: {
            album_id:req.params.id
        }
    }).then(r =>{
        console.dir(r[0].dataValues)
        res.send(r[0].dataValues)
    });


})

router.post('/', async(req, res) => {
    console.log(req.query)
    let name = req.query.name
    let dsc = req.query.description

    const album = await Album.create({ album_id: '', album_name: name, description: dsc }).then(console.log("juz"));
    console.log(album.album_id);
    console.log(album.album_name);


    res.send('albumy post ')
})
router.put('/:id', async(req, res) => {
    console.log( req.params, req.query)
    await Album.update({ album_name: req.query.name, description: req.query.description }, {
        where: {
            album_id: req.params.id
        }
    });
    res.send('albumy put ')
})
router.delete('/:id', async(req, res) => {
    console.log(req.params.id)
    await Album.destroy({
        where: {
            album_id: req.params.id
        }
    });
    res.send('albumy delete')
})


module.exports = router