export interface IValidateRule {
  regex: RegExp;
  errorMessage: string;
}

export default class ValidateRule implements IValidateRule {
  regex: RegExp;
  errorMessage: string;
  constructor(regex: RegExp, errorMessage: string) {
    this.regex = regex;
    this.errorMessage = errorMessage;
  }
}
