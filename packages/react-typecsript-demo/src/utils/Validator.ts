import { objectValueString } from "../models/types/common";
import { IValidateRule } from "./ValidateRule";

export interface IValidator {
  column: unknown,
  validRules: Map<string, IValidateRule>;
  setValidRule?: (ruleName: string, validateRule: IValidateRule) => void;
  getValidRule?: (ruleName: string) => IValidateRule | undefined;
  getAllInvalidRule: (value: string) => objectValueString;
}


export default class Validator<T> implements IValidator {
  column: T;
  validRules: Map<string, IValidateRule>;
  readonly inValidRule: { [key: string]: string } = {};;

  constructor(
    column: T,
    validRule: Map<string, IValidateRule>,
  ) {
    this.column = column;
    this.validRules = validRule;
  }

  setValidRule(ruleName: string, validateRule: IValidateRule) {
    this.validRules.set(ruleName, validateRule);
  }

  // 如果之後有要針對特定條件才要驗證可以從這裡取得特定條件驗證
  getValidRule(ruleName: string) {
    return this.validRules.get(ruleName);
  }

  getAllInvalidRule(value: string): objectValueString { 
    this.validRules.forEach((validRule, ruleName) => {
      if(validRule) {
        if(!validRule.regex.test(value) || value === '') {
          this.inValidRule[ruleName] = validRule.errorMessage;
        } else {
          delete this.inValidRule[ruleName]
        }
      }
    })
    return this.inValidRule;
  }
}
