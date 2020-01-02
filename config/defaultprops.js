const clothes = require('../assets/clothes/clothes')
const eyes = require('../assets/face/eyes')
const eyebrow = require('../assets/face/eyebrow')
const bindi = require('../assets/face/bindi')
const mouth = require('../assets/face/mouth')
const nose = require('../assets/face/nose')
const eyeware = require('../assets/top/eyeware')
const malehairstyle = require('../assets/top/malehairstyle')
const femalehairstyle = require('../assets/top/femalehairstyle')
const facialhair = require('../assets/top/facialhair')
const {skin_colors,hair_colors} = require('../config/colors.js')

const default_nose = nose['normal']
const default_clothes = clothes['blazershirt']
const default_mouth = mouth['normal']
const default_eyes = eyes['normal']
const default_eyebrow = eyebrow['normal']
const default_eyeware = ''
const default_facialhair = ''
const default_bindi = ''
const default_haircolor = skin_colors[0]
const default_skincolor = hair_colors[0]
const default_hairstyle = malehairstyle['shorthairshortwaved']

module.exports = {
    default_nose,
    default_clothes,
    default_mouth,
    default_eyes,
    default_eyebrow,
    default_eyeware,
    default_facialhair,
    default_bindi,
    default_haircolor,
    default_skincolor,
    default_hairstyle
}