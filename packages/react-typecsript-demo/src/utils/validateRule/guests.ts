import ValidateRule from "../ValidateRule";


const onlyNumberFormat = new ValidateRule(new RegExp('^[0-9]*$'), '只能有數字');
const maxTwoDigitNumberFormat = new ValidateRule(new RegExp('/^\d{0,2}$/'), '只能有最多兩位數字正整數');

export {onlyNumberFormat, maxTwoDigitNumberFormat};