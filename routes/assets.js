const express = require('express');
const router = express.Router();
const facialhair = require('../assets/top/facialhair')
const clothes = require('../assets/clothes/clothes')
const eyes = require('../assets/face/eyes')
const eyebrow = require('../assets/face/eyebrow')
const malehairstyle = require('../assets/top/malehairstyle')
const femalehairstyle = require('../assets/top/femalehairstyle')
const bindi = require('../assets/face/bindi')
const mouth = require('../assets/face/mouth')
const nose = require('../assets/face/nose')
const eyeware = require('../assets/top/eyeware')
const {skin_colors,hair_colors} = require('../config/colors.js')
const packname = require('../config/packs.js')
router.get('/', (req, res) => {
	const asset_json = {}
    if (req.query.resp === 'props') {
        asset_json['props'] = { 'clothes': Object.keys(clothes), 'eyebrow': Object.keys(eyebrow), 'eyes': Object.keys(eyes), 'mouth': Object.keys(mouth), 'nose': Object.keys(nose), 'malehairstyle': Object.keys(malehairstyle),'femalehairstyle': Object.keys(femalehairstyle), 'eyeware': Object.keys(eyeware), 'skincolor': skin_colors, 'haircolor': hair_colors } 
    } else if (req.query.resp === 'packs') {
        const packs = []
        for (let i = 0; i < Object.keys(packname).length; i++) {

            packs.push(Object.keys(packname)[i])
        }
        asset_json['packs'] = packs

    }
    else{
    	let packs = []
    	asset_json['props'] = { 'clothes': Object.keys(clothes), 'eyebrow': Object.keys(eyebrow), 'eyes': Object.keys(eyes), 'mouth': Object.keys(mouth), 'nose': Object.keys(nose), 'malehairstyle': Object.keys(malehairstyle),'femalehairstyle': Object.keys(femalehairstyle), 'eyeware': Object.keys(eyeware), 'skincolor': skin_colors, 'haircolor': hair_colors} 
    	for (let i = 0; i < Object.keys(packname).length; i++) {

            packs.push(Object.keys(packname)[i])
        }
        asset_json['packs'] = packs
    }


    res.status(200).send({ "data": asset_json })
})

module.exports = router;