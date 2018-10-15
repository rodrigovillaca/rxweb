import {
    ValidatorFn,AbstractControl
} from "@angular/forms";
import { CompareConfig } from "../models/config/compare-config";
import { compareValidator  } from '../reactive-form-validators/index'
import { defaultContainer } from "../core/defaultContainer"
import { AnnotationTypes } from "../core/validator.static"
import {STRING } from '../const/validator.const';

export function compareValidatorExtension(config?: CompareConfig): ValidatorFn {
    var validator = compareValidator(config);
    var rxwebValidator = (control:any,target?:object): { [key: string]: any } => {
        if (typeof control == STRING)
          defaultContainer.init(target, 0, control, AnnotationTypes.compare, config);
        else
          return validator(control);
      return null
    }
    return rxwebValidator;
}
