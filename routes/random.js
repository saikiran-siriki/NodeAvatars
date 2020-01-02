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
const { create_svg, create_face } = require('../config/helpers.js')

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

router.post('/', (req, res) => {
    let requested_pack = packname[req.query.packname] || packname['expression_pack']
    let result = []
    console.log(requested_pack)
    for (let i = 0; i < requested_pack.length; i++) {
        if (req.query.gender === 'female') {
            var hairstyle_param = femalehairstyle[req.query.hairstyle] || default_hairstyle
        } else {
            var hairstyle_param = malehairstyle[req.query.hairstyle] || default_hairstyle
        }
        let clothes_param = clothes[requested_pack[i]['clothes']] || clothes[req.query.clothes] || default_clothes
        let mouth_param = req.body.mouth_prop_html || mouth[requested_pack[i]['mouth']] || mouth[req.query.mouth] || default_mouth
        let nose_param = req.body.nose_prop_html || nose[requested_pack[i]['nose']] || nose[req.query.nose] || default_nose
        let eyes_param = req.body.eye_prop_html || eyes[requested_pack[i]['eyes']] || eyes[req.query.eyes] || default_eyes
        let eyebrow_param = req.body.eyebrow_prop_html || eyebrow[requested_pack[i]['eyebrow']] || eyebrow[req.query.eyebrow] || default_eyebrow
        let bindi_param = req.body.bindi_prop_html || default_bindi
        let eyeware_param = eyeware[requested_pack[i]['eyeware']] || eyeware[req.query.eyeware] || default_eyeware
        let skincolor_param = requested_pack[i]['skincolor'] || req.query.skincolor || default_skincolor
        let haircolor_param = requested_pack[i]['haircolor'] || req.query.haircolor || default_haircolor
        let facialhair_param = facialhair[requested_pack[i]['facialhair']] || facialhair[req.query.facialhair] || default_facialhair
        let output = base_svg(clothes_param, face(mouth_param, nose_param, eyes_param, eyebrow_param, bindi_param), hairstyle_param('#' + haircolor_param), eyeware_param, body('#' + skincolor_param), facialhair_param)
        result.push(output)



    }
    res.status(200).send(result)


})

module.exports = router;