const {returnPattern,splitNumbers,romanNumber,getdigit} = require("./../roman.utils");
const APP_CONSTANTS = require("./../../constants/app.constants")

describe("Test roman utils functions", () => {
    it("Return the good pattern", () => {
        expect(returnPattern(3,"I")).toEqual(["I","I","I"]);
    });

    it("splitNumber::return_good_roman_number_from_arabic_number_each_case",() => {
        expect(splitNumbers(3)).toBe("III");
        expect(splitNumbers(6)).toBe("VI");
        expect(splitNumbers(30)).toBe("XXX");
        expect(splitNumbers(70)).toBe("LXX");
    })

    it("romanNumber::good_roman_number_when_value_in_transaltions",() => {
        expect(romanNumber(APP_CONSTANTS.APP_ROMAN_TRANSLATIONS,50)).toBe("L");
    })

    it("romanNumber::good_roman_number_when_value_not_transaltions",() => {
        expect(romanNumber(APP_CONSTANTS.APP_ROMAN_TRANSLATIONS,70)).toBe("LXX")
    })

    it("getdigit::get_thousand_digit_of_1250", () => {
        expect(getdigit(1250,3)).toBe(1);
    })

})