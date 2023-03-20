import { IFormData } from ".";
import {
  emailFormat,
  emailFormatWithSpecificDomain,
  fruitLimitedFormat,
  onlyNumberFormat,
  maxTwoDigitNumberFormat,
} from "../../../utils/validateRule/";
import { validatorObj } from "../../../utils/validateRule/model";
import Validator, { IValidator } from "../../../utils/Validator";

type validateType = keyof IFormData;

const emailValidatRules = new Map([
  ["emailFormat", emailFormat],
  ["emailDomain", emailFormatWithSpecificDomain],
]);
const emailValidator = new Validator<validateType>(
  "emailType",
  emailValidatRules
);

const fruitValidatRules = new Map([["fruitFormat", fruitLimitedFormat]]);
const fruitValidator = new Validator<validateType>(
  "selectType",
  fruitValidatRules
);

const guestsValidatRules = new Map([
  ["onlyNumberFormat", onlyNumberFormat],
  ["maxTwoDigitNumberFormat", maxTwoDigitNumberFormat],
]);
const guestsValidator = new Validator<validateType>(
  "inputType",
  guestsValidatRules
);

const validatorObject = {
  emailType: emailValidator,
  selectType: fruitValidator,
  inputType: guestsValidator
} as validatorObj<IFormData>

export default validatorObject;


