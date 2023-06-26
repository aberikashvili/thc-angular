import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ContactUsComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  companyName = new FormControl('', [Validators.required]);
  textArea = new FormControl('', [Validators.required]);

  onSubmit() {
    const data = {
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
      companyName: this.companyName,
      textArea: this.textArea,
    };
    console.log(data);
  }

  checkInputs() {
    if (
      this.email.invalid ||
      this.firstName.invalid ||
      this.lastName.invalid ||
      this.companyName.invalid ||
      this.textArea.invalid
    ) {
      return true;
    } else {
      return false;
    }
  }
}
