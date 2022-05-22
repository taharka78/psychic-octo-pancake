
// App js
const RomanUtils = require("./roman.utils");
const APP_CONSTANTS = require("./../constants/app.constants");

var client;
/**
 * Post request for convert my number
 * @param {*} req the request from frontend
 * @param {*} res the response object.
 */
const getRomanNumberFromArabic = (req,res) => {
    // if the value sended is not a number return an error message.
    if(!req.body.number || Number.isNaN(parseInt(req.body.number))) res.status(404).send({ error : { message : "Please give a valid number"}});
    // Parse the number with roman utils functions.
    else {
        let x = parseInt(req.body.number),
        hundreds = RomanUtils.getdigit(x,2)*100,
        tens = RomanUtils.getdigit(x,1)*10,
        units = RomanUtils.getdigit(x,0);

        let result = [hundreds,tens,units].filter((n) => n > 0).reduce((acc,curr) => acc +  RomanUtils.romanNumber(APP_CONSTANTS.APP_ROMAN_TRANSLATIONS,curr),"")
        res.status(200).send({result})
    }
}

module.exports = {getRomanNumberFromArabic}