
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
    if(!req.body.number || Number.isNaN(parseInt(req.body.number))) {
        senEventToCLient(client,APP_CONSTANTS.ERROR_NUMBER_VALUE_SENT);
        res.status(404).send(APP_CONSTANTS.ERROR_NUMBER_VALUE_SENT);
    }
    // Parse the number with roman utils functions.
    else {
        let x = parseInt(req.body.number),
        hundreds = RomanUtils.getdigit(x,2)*100,
        tens = RomanUtils.getdigit(x,1)*10,
        units = RomanUtils.getdigit(x,0);

        let result = [hundreds,tens,units].filter((n) => n > 0).reduce((acc,curr) => acc +  RomanUtils.romanNumber(APP_CONSTANTS.APP_ROMAN_TRANSLATIONS,curr),"")
        senEventToCLient(client,{result});
        res.status(200).send({result})
    }
}

/**
 * Initiate connexion to server side event.
 * @param {*} req 
 * @param {*} res 
 */
 const eventHandler = (_req,res) => {
    client = {response : res};
    res.writeHead(200,APP_CONSTANTS.SSE_HEADERS); 
}


/**
 * Send data to connected clients.
 * @param {*} client 
 * @param {*} result 
 * @returns 
 */
const senEventToCLient = (_client,result) => {
    if(!client) return;
    client?.response.write(`data:${JSON.stringify(result)}\n\n`);
}



module.exports = {getRomanNumberFromArabic,eventHandler,senEventToCLient}