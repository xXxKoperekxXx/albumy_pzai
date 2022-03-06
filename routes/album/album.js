const express = require('express')
const router = express.Router()
const con = require('../../database_config')

router.get('/', (req, res) => {
    con.query('SELECT * FROM album', function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
    res.send('albumy')

})

router.get('/:id', (req, res) => {
    console.log(req.params.id)
    let id =req.params.id
    let q = 'SELECT * FROM album WHERE album_id='+id
    con.query(q, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });


    res.send('albumy po id')
})

router.post('/', (req, res) => {
    console.log(req.query)
    let name = req.query.name
    let dsc = req.query.description
    let q = "INSERT INTO `album` (`album_id`, `album_name`, `description`) VALUES (NULL, '"+name+"', '"+dsc+"')"
    con.query(q, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });


    res.send('albumy post ')
})
router.put('/:id', (req, res) => {
    console.log( req.id)
    //let q = "UPDATE `album` SET `album_name` = '"+req.body.name+"', `description` = '"+req.body.description+"' WHERE `album`.`album_id` ="+req.params.id

    res.send('albumy put ')
})
router.delete('/:id', (req, res) => {
    console.log(req.params.id)
    let q = "DELETE FROM `album` WHERE `album`.`album_id` = "+req.params.id
    con.query(q, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
    res.send('albumy delete')
})


module.exports = router