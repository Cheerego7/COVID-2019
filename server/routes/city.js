/* eslint-disabed */
var express = require('express')
var router = express.Router()

const { getCityList } = require('../controller/city')

router.post('/city', function (req, res, next) {
  const { provinceName } = req.body
   getCityList(provinceName).then(cityName => {
     res.json(cityName)
     console.log(cityName)
  })
    console.log(provinceName)
})

module.exports = router