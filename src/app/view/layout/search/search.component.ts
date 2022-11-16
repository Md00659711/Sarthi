import { Component, OnInit } from '@angular/core';
import { DashService } from 'src/app/services/dash.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  userDetails:any;
  voter_data:any;
  constructor(private _loginservice: LoginService  , private _dashdata : DashService) {
    this.userDetails = this._loginservice.getLoggedInUser();
   }

  ngOnInit(): void {

    this.getDataofvoterlist();
  }

  getDataofvoterlist(){
    var arg = {
      sheet_id: this.userDetails.data.id,
      length: 0,
      item: 20,
      parts_no: "",
      asem_id: "",
      col_name: "",
      col_value: "",
      search: ""
    }
    this._dashdata.voter_list(arg).subscribe({
      next: (data) => {
        console.log(data.data);
        this.voter_data=data.data;
      }
    });
  }
}
