import { Router, RouterModule } from '@angular/router'
import { Component, OnInit } from '@angular/core';
import { MyService} from '../myservice.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[MyService]
})
export class LoginComponent implements OnInit {

  constructor(private service:MyService,private routes:Router) { }
  msg;


  ngOnInit() {
  }
  check(uname:string,p:string)
  {
    var output=this.service.checkusernameandpassword(uname,p);
    if(output==true)
    {
      this.routes.navigate(['/dashboard']);

    }
    else{
      this.msg="Invalid username or password";

    }
  }

}