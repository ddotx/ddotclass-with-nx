import { Component, OnInit } from '@angular/core';
import { UserSettings } from '@ddotclass/model';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '@ddotclass/services';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  originalUserSettings : UserSettings = {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes: null
  };

  //*ngx-datepicker
  startDate: Date;

  //*ngx-timepicker
  startTime: Date;

  //*ngx-rating
  userRating: number;
  maxRating = 10;
  isReadonly: boolean = false;

  //*ngx-button
  singleModel = "On";

  userSettings : UserSettings = {...this.originalUserSettings}; //* ==> Copying Form Data
  //*==Handing POST errors
  postError = false;
  postErrorMessage = '';
  postErrorMessageServer = '';
  //*===Form: Select Elements
  // subscriptionTypes = ['1-Monthly','2-Annual','3-Lifetime'];
  // subscriptionTypes: Observable<string[]>;
  subscriptionTypes$
  //subscriptionTypes: string[]


  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.subscriptionTypes$ = this.dataService.getSubscriptionTypes();

    // this.dataService.getSubscriptionTypes().subscribe(
    //   ((result:string[]) => this.subscriptionTypes = result)
    // );

    this.startDate = new Date();
    this.startTime = new Date();
  }

  //! === Handling Form Control Events
  //* By using Angular events, we has full access to all HTML5 events
  onBlur(field: NgModel){
    console.log('in onBlur: ', field.valid);
  }

  //! === Submitted Forms
  onSubmit(form: NgForm){
    console.log('in onSubmit: ', form.valid);

    if(form.valid) {
    this.dataService.postUserSettingsForm(this.userSettings)
    .subscribe(
      result => console.log('success: ', result),
      error => this.onHttpError(error)
      );
    }else{
      this.postError = true;
      this.postErrorMessage = "Please fix the above errors";
    }
  }
  
  onHttpError(errorResponse:any){
    console.log('error: ',errorResponse);
    //this.postError = true;
    //*=> @server [response.body = {errorMessage: '...'}] vvv
    this.postErrorMessageServer = errorResponse.error.errorMessage; 
  }
    
}
