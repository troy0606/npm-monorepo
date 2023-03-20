import ValidateRule from "../ValidateRule";


const fruitLimitedFormat = new ValidateRule(new RegExp('^(grapefruit|lime|coconut)$'), '只能選 grapefruit或lime或coconut');

export {fruitLimitedFormat};