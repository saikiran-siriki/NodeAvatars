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

    let hairstyle_param = malehairstyle[req.query.hairstyle] || femalehairstyle[req.query.hairstyle] || default_hairstyle
    let clothes_param = clothes[req.query.clothes] || default_clothes
    let mouth_param = mouth[req.query.mouth] || default_mouth
    let nose_param = nose[req.query.nose] || default_nose
    let eyes_param = eyes[req.query.eyes] || default_eyes
    let eyebrow_param = eyebrow[req.query.eyebrow] || default_eyebrow
    let bindi_param = bindi[req.query.bindi] || default_bindi
    let eyeware_param = eyeware[req.query.eyeware] || default_eyeware
    let skincolor_param = req.query.skincolor || default_skincolor
    let haircolor_param = req.query.haircolor || default_haircolor
    let facialhair_param = facialhair[req.query.facialhair] || default_facialhair
    let output = create_svg(clothes_param, create_face(mouth_param, nose_param, eyes_param, eyebrow_param, bindi_param), hairstyle_param('#' + haircolor_param), eyeware_param, create_body('#' + skincolor_param), facialhair_param)

    res.status(200).send(output)



})

module.exports = router;