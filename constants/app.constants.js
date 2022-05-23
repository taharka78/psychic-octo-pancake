const APP_ROMAN_TRANSLATIONS = {1:"I",4:"IV",5:"V",9:"IX",10:"X",40:"XL",50:"L",90 :"XC",100:"C"};
const SSE_HEADERS = {
    'Content-Type': 'text/event-stream',
    'Connection': 'keep-alive',
    'Cache-Control': 'no-cache'
  }
const ERROR_NUMBER_VALUE_SENT = { error : { message : "Please give a valid number"}};
module.exports = {APP_ROMAN_TRANSLATIONS,SSE_HEADERS,ERROR_NUMBER_VALUE_SENT}