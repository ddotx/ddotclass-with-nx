import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  reactiveForm: FormGroup
  isSubmitted: boolean

  pattern = ".*[A-Z].*" //? https://regexr.com/

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.reactiveForm = this.fb.group({
      name: ['',[Validators.required, Validators.minLength(3), Validators.pattern(this.pattern)]],
      startDate: ['',Validators.required],
      startTime: ['',Validators.required],
      userRating: ['',Validators.required],
      singleModel: ['',Validators.required],
      emailOffers: ['',Validators.required],
      interfaceStyle:['',Validators.required],
      subscriptionType: ['',Validators.required],
      notes:['',Validators.required],
      password:['',Validators.required]
    })
  }

  onSubmit(){
    this.isSubmitted = true
    console.log(this.reactiveForm.get('name').valid)
    console.log('in onSubmit: ' + JSON.stringify(this.reactiveForm.value));
  }

}
