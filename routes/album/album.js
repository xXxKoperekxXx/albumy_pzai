const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.send('albumy')

})

router.get('/:id', (req, res) => {
    console.log(req.params.id)

    res.send('albumy po id')
})

router.post('/', (req, res) => {
    console.log(req.query)

    res.send('albumy post ')
})
router.put('/:id', (req, res) => {
    console.log(req.params.id)

    res.send('albumy put ')
})
router.delete('/:id', (req, res) => {
    console.log(req.params.id)

    res.send('albumy delete ')
})


module.exports = router