import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { UserSettings } from '@ddotclass/model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  constructor(private http: HttpClient) { }

  postUserSettingsForm(userSettings: UserSettings): Observable<any> {
    // return of(userSettings); //*==> use 'of' to create Observable

    // return this.http.post('url',userSettings);

    //* Use 'PutsReq' to receive the fake responses https://putsreq.com
//TODO on PutsReq Response Builder
    //? var parsedBody = JSON.parse(request.body);
//? parsedBody.id = '1';
//? response.body = parsedBody;
//TODO error handling
//? response.status = 400;

    return this.http.post('https://putsreq.com/9cFYRBRezKTzukRYZn8K',userSettings,);
  }

  getSubscriptionTypes(): Observable<string[]> {
    // throw new Error("Method not implemented.");
    return of(['Monthly','Annual','Lifetime']);
  }

}
