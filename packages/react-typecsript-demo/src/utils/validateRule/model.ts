import { IValidator } from "../Validator";

export type validatorObj<T> = {
  [P in keyof T]: IValidator
}