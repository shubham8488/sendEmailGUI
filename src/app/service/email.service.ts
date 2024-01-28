
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
  
})


export class EmailService {

  private url:string = "http://shubham.eastus.cloudapp.azure.com:8080/emailapi-0.0.1-SNAPSHOT/sendEmail";


  constructor(private http: HttpClient  ) { }

  sendEmail(data:any ){
    console.log(`${this.url}`)
    return this.http.post(`${this.url}`,data)

  }
}
