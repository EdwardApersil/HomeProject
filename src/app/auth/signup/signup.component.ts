import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup | any;

  constructor(private fb: FormBuilder,
    private homeService: HousingService
    ) {
    
  }



  ngOnInit() {
    this.signupForm = this.fb.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      city: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      region: ['', [Validators.required]],
      country: ['', [Validators.required]], 
      phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    });
    // You can add any additional initialization code here if needed
  }

  // Create a method to handle form submission
  onSubmit() {
    if(this.signupForm.value) {
      console.log(this.signupForm.value);
      const newUser = this.signupForm.value;
      this.homeService.createUser(newUser).subscribe(
        response => {
          console.log("A new user has been created",response);
        }
      )
    }
  }
}
