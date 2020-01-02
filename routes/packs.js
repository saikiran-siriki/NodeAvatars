var express = require('express');
var router = express.Router();
const { skin_colors, hair_colors } = require('../config/colors.js')
const facialhair = require('../assets/top/facialhair')
const clothes = require('../assets/clothes/clothes')
const eyes = require('../assets/face/eyes')
const eyebrow = require('../assets/face/eyebrow')
const bindi = require('../assets/face/bindi')
const mouth = require('../assets/face/mouth')
const nose = require('../assets/face/nose')
const eyeware = require('../assets/top/eyeware')
const packname = require('../config/packs.js')
const malehairstyle = require('../assets/top/malehairstyle')
const femalehairstyle = require('../assets/top/femalehairstyle')
const { create_svg, create_face, create_body } = require('../config/helpers.js')

const {default_nose,
    default_clothes,
    default_mouth,
    default_eyes,
    default_eyebrow,
    default_eyeware,
    default_facialhair,
    default_bindi,
    default_haircolor,
    default_skincolor,
    default_hairstyle} = require('../config/defaultprops.js')


router.get('/', (req, res) => {
    console.log('request_received')
    console.log(req.query)
    let requested_pack = packname[req.query.packname] || packname['pack2']
    let result = []
    console.log(requested_pack)
    for (let i = 0; i < requested_pack.length; i++) {
        
   
        var hairstyle_param = malehairstyle[req.query.hairstyle] || femalehairstyle[req.query.hairstyle] || default_hairstyle
    
        let clothes_param = clothes[requested_pack[i]['clothes']] || clothes[req.query.clothes] || default_clothes
        let mouth_param = mouth[requested_pack[i]['mouth']] || mouth[req.query.mouth] || default_mouth
        let nose_param = nose[requested_pack[i]['nose']] || nose[req.query.nose] || default_nose
        let eyes_param = eyes[requested_pack[i]['eyes']] || eyes[req.query.eyes] || default_eyes
        let eyebrow_param = eyebrow[requested_pack[i]['eyebrow']] || eyebrow[req.query.eyebrow] || default_eyebrow
        let bindi_param = bindi[req.query.bindi] || default_bindi
        
        let eyeware_param = eyeware[requested_pack[i]['eyeware']] || eyeware[req.query.eyeware] || default_eyeware
        let skincolor_param = requested_pack[i]['skincolor'] || req.query.skincolor || default_skincolor
        let haircolor_param = requested_pack[i]['haircolor'] || req.query.haircolor || default_haircolor
        let facialhair_param = facialhair[requested_pack[i]['facialhair']] || facialhair[req.query.facialhair] || default_facialhair

        let output = create_svg(clothes_param, create_face(mouth_param, nose_param, eyes_param, eyebrow_param,bindi_param), hairstyle_param('#' + haircolor_param), eyeware_param, create_body('#' + skincolor_param), facialhair_param)
        result.push(output)



    }
    res.status(200).send(result)
})
module.exports = router;