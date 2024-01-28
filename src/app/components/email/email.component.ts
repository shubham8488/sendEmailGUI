import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmailService } from '../../service/email.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-email',
  standalone: true,
  imports: [MatButtonModule,MatFormFieldModule,MatInputModule,CommonModule,FormsModule,MatProgressSpinnerModule],
  templateUrl: './email.component.html',
  styleUrl: './email.component.css'
})
export class EmailComponent {

  data={
  to:"",
  subject:"",
  body:""
}

flag:boolean=false;

  constructor(private snack:MatSnackBar, private email:EmailService){}

  submitForm(){

  
    console.log("submitForm clicked !")
    
    this.flag=true;
    this.email.sendEmail(this.data).subscribe(
      response=>{
        console.log("Got the response from api !")
        console.log(response)
        this.snack.open("Got the response from api !" , "OK")
        this.flag=false;
      },error=>{
        console.log("error occured")
        console.log(error)
        this.snack.open("Email send unsuccessful","OK")
        this.flag=false;
      }
    )

    

  }



}
