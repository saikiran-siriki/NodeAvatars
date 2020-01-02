var express = require('express');
var router = express.Router();

const { skin_colors, hair_colors } = require('../config/colors.js')
const malehairstyle = require('../assets/top/malehairstyle')
const femalehairstyle = require('../assets/top/femalehairstyle')
const facialhair = require('../assets/top/facialhair')
const clothes = require('../assets/clothes/clothes')
const eyes = require('../assets/face/eyes')
const eyebrow = require('../assets/face/eyebrow')
const bindi = require('../assets/face/bindi')
const mouth = require('../assets/face/mouth')
const nose = require('../assets/face/nose')
const eyeware = require('../assets/top/eyeware')
const { create_svg, create_face } = require('../config/helpers.js')

router.get('/', (req, res) => {
    let result = []
    if (req.query.resp === 'femalehairstyle') {
        
            for (var i = 0; i < Object.keys(femalehairstyle).length; i++) {
                // var requested_hairstyle = hairstyle[requested_pack[i]['hairstyle']]
                let output = create_svg('', '', femalehairstyle[Object.keys(femalehairstyle)[i]]('#A55728'), '', '')
                let obj = {}
                obj['prop'] = Object.keys(femalehairstyle)[i]
                obj['svg'] = output
                result.push(obj)
            
        }
        } 
        if (req.query.resp === 'malehairstyle') {
            for (var i = 0; i < Object.keys(malehairstyle).length; i++) {
                // var requested_hairstyle = hairstyle[requested_pack[i]['hairstyle']]
                let output = create_svg('', '', malehairstyle[Object.keys(malehairstyle)[i]]('#A55728'), '', '')
                let obj = {}
                obj['prop'] = Object.keys(malehairstyle)[i]
                obj['svg'] = output
                result.push(obj)
            }
            
        


    }
    if (req.query.resp === 'haircolor') {
        for (var i = 0; i < hair_colors.length; i++) {
            let output = hair_colors[i]
            let obj = {}
            obj['color'] = output
            result.push(obj)

        }
    }
    if (req.query.resp === 'eyebrow') {
        for (var i = 0; i < Object.keys(eyebrow).length; i++) {
            // var requested_hairstyle = hairstyle[requested_pack[i]['hairstyle']]
            let output = create_svg('', create_face('', '', '', eyebrow[Object.keys(eyebrow)[i]]), '', '', '')
            let obj = {}
            obj['prop'] = Object.keys(eyebrow)[i]
            obj['svg'] = output
            result.push(obj)

        }

    }
    if (req.query.resp === 'bindi') {
        for (var i = 0; i < Object.keys(bindi).length; i++) {
            // var requested_hairstyle = hairstyle[requested_pack[i]['hairstyle']]
            let output = create_svg('', create_face('', '', '', '',bindi[Object.keys(bindi)[i]]), '', '', '')
            let obj = {}
            obj['prop'] = Object.keys(bindi)[i]
            obj['svg'] = output
            result.push(obj)

        }

    }
    if (req.query.resp === 'eyeware') {
        for (var i = 0; i < Object.keys(eyeware).length; i++) {
            // var requested_hairstyle = hairstyle[requested_pack[i]['hairstyle']]
            let output = create_svg('', '', '', eyeware[Object.keys(eyeware)[i]], '')
            let obj = {}
            obj['prop'] = Object.keys(eyeware)[i]
            obj['svg'] = output
            result.push(obj)
        }

    }
    if (req.query.resp === 'facialhair') {
        for (var i = 0; i < Object.keys(facialhair).length; i++) {
            // var requested_hairstyle = hairstyle[requested_pack[i]['hairstyle']]
            let output = create_svg('', '', '', '', '', facialhair[Object.keys(facialhair)[i]])
            let obj = {}
            obj['prop'] = Object.keys(facialhair)[i]
            obj['svg'] = output
            result.push(obj)
        }

    }
    if (req.query.resp === 'skincolor') {
        for (var i = 0; i < skin_colors.length; i++) {
            let output = skin_colors[i]
            let obj = {}
            obj['color'] = output
            result.push(obj)

        }

    }
    res.status(200).send(result)

})


module.exports = router;