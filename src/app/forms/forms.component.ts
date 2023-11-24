import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],// Corrected property name from 'import' to 'imports'
})

export class FormsComponent {
  housingService: [] | any;
  @ViewChild('inputElement') inputElement!: ElementRef;
  // applyForm: any;

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    number: new FormControl('')
  });
 

  clickEvent() {
    if (this.applyForm.get('firstName')?.value !== '' && this.applyForm.get('lastName')?.value !== '' && this.applyForm.get('email')?.value !== '') {
      alert("Thank you for booking, enjoy your stay!");
    }else{
      alert("Please fill out all fields");
    }
  }
  

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
    );
  }

 
}