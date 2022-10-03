import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataapiService {

  constructor(private httpclient : HttpClient) { }

  public fetchData(){
  
    return this.httpclient.get('http://127.0.0.1:5000');

  }
}
