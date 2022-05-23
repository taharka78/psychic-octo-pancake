const {getRomanNumberFromArabic} = require('./../roman.number.controller');
const APP_CONSTANTS = require("./../../constants/app.constants");

describe("RomanNumberController::test_methods", () => {
    let reqOK = {
        body : {number : 50}
    }, reqKO = {
        body : {number: "aaaa"}
    }, res = {
        send : jest.fn((body) => {
            return {...res, body}
        }),
        writeHead : jest.fn((status, headers) => {
            return {status,...headers}
        }),
        write : jest.fn(() => {

        }),
        status : jest.fn((status) => {
            return {...res, status}
        })
    },
    expectedResult = {result : "L"};

    it("getRomanNumberFromArabic::good_request_received", () => {
        getRomanNumberFromArabic(reqOK,res)
        expect(res.send).toHaveBeenCalledWith(expectedResult)
    })

    it("getRomanNumberFromArabic::bad_request_received", () => {
        getRomanNumberFromArabic(reqKO,res)
        expect(res.send).toHaveBeenCalledWith(APP_CONSTANTS.ERROR_NUMBER_VALUE_SENT)
    }) 

    beforeEach(() => {
        jest.mock("./../roman.number.controller.js",() => {
            return {
                senEventToCLient : jest.fn((client,result) => {})
            }
        });
    })
    
})