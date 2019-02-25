import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms"
import { RxFormBuilder } from '@rxweb/reactive-form-validators';

import { User } from './user.model';

@Component({
    selector: 'app-toBoolean-add',
    templateUrl: './to-boolean-add.component.html'
})
export class ToBooleanAddComponent implements OnInit {
    userFormGroup: FormGroup

    constructor(
        private formBuilder: RxFormBuilder    ) { }

    ngOnInit() {
        let user = new User();
        this.userFormGroup = this.formBuilder.formGroup(user);
    }
    checkType(fieldName,typeName){
      return typeof this.userFormGroup.value[fieldName] == typeName 
    }
}
