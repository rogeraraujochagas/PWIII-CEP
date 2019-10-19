import { Injectable } from '@angular/core';

import { throwError } from 'rxjs';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class CepAPIService {

  apiURL: string = "https://viacep.com.br/ws/";

  constructor(private httpClient: HttpClient) { }
  
  handleError(error) {
    let errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    alert(errorMessage);
    return throwError(errorMessage);
  }

}
