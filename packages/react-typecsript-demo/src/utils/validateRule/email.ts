import ValidateRule from "../ValidateRule";


const emailFormat = new ValidateRule(new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}'), '不符合email格式');
const emailFormatWithSpecificDomain = new ValidateRule(new RegExp('[a-z0-9]+@stackoverflow.com'), '不是stackoverflow會員');

export {emailFormat, emailFormatWithSpecificDomain};