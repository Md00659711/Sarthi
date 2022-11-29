import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { DashService } from 'src/app/services/dash.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    image_url : any;
    userDetails: any;
    search :any ;
    user_info :any;
    totol_voter :any;
    voter_data :any;
    TOTAL_USER:any;
    VERIFIED_USER:any;
    INVALID_USER:any;
    VOTER_RELA:any;
    PROB_SUGG:any;
    userPassword = localStorage.getItem('pass');
    assembliyList: Array<any> = [];
    constructor(private _loginservice: LoginService , private _dashdata : DashService) {
      this.userDetails = this._loginservice.getLoggedInUser();
 
    }

  ngOnInit(): void {
    this.getDataOfLoginUser();
    this.getDataOfDashData("0");
  }

  getDataOfLoginUser() {
    var arg_1;
    var arg_2;
    this.image_url=this.userDetails.data.image;
    if (this.userDetails.data.child !== undefined) {
      var child_param = {
        child_id: this.userDetails.data.child.id,
        mobile: this.userDetails.data.child.mobile,
        password: this.userPassword,
        device_id: "",
        device_token: "",
        device_name: ""
      };
      arg_1 = child_param;
      arg_2 = this.userDetails.data.child.access_token;
    } else {
      var admin_param = {
        sheet_id: this.userDetails.data.id,
        mobile: this.userDetails.data.mobile,
        password: this.userPassword,
        device_id: "",
        device_token: "",
        device_name: ""
      };
      arg_1 = admin_param;
      arg_2 = this.userDetails.data.access_token;
    }
    this._loginservice.postuserdata(arg_1, arg_2).subscribe({
      next: (data) => {
        this.assembliyList = data.data.assemblies;
      }

    });
  }

  getDataOfDashData(arg:any){
   console.log(arg.name);
    var search = {
      sheet_id: this.userDetails.data.id,
      asem_id: arg
    }

      this._dashdata.dashListData(search).subscribe({
        next: (data) => {
          this.user_info=data.data;
          this.totol_voter=data.TOTAL_VOTER;
          this.TOTAL_USER=data.TOTAL_USER;
          this.VERIFIED_USER=data.VERIFIED_USER;
          this.INVALID_USER=data.INVALID_USER;
          this.VOTER_RELA=data.VOTER_RELA;
          this.PROB_SUGG=data.PROB_SUGG;       
        }

      });
  }
}
