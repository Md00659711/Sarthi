import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  login_user_name :any;
  userDetails: any;
  constructor(private _loginservice: LoginService) { 
      this.userDetails = this._loginservice.getLoggedInUser();
  }

  ngOnInit(): void {

    if (this.userDetails.data.child !== undefined) {
      this.login_user_name=this.userDetails.data.child.name;
    }else{
      this.login_user_name=this.userDetails.data.candidate;
    }
  }

}
