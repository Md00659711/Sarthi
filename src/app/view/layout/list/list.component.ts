import { Component, OnInit } from '@angular/core';
import { DashService } from 'src/app/services/dash.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  lists:any;
  userDetails:any;
  group_list:any;
  voter_data:any;
  col_name:any;
  booth:any;
  constructor(private _loginservice: LoginService , private _list_fillter:DashService) { 
    this.userDetails = this._loginservice.getLoggedInUser();
  }

  ngOnInit(): void {
    this.getDataOfDashData();
    this.get_by_list('');
    this.get_by_booth_dropdown();
  }

  getDataOfDashData(){
    var ags = {
      sheet_id: this.userDetails.data.id,
    }

      this._list_fillter.voter_list_fillter(ags).subscribe({
        next: (data) => {
          this.lists=data;
        
        }

      });
  }

  get_gropup_by_list(arg :any ){
 console.log(arg);
    this.col_name=arg;
    var reg = {
      sheet_id: this.userDetails.data.id,
      length: 0,
      item: 100,
      col: arg,
      table: "sheet"
    }
      this._list_fillter.get_group_by_list(reg).subscribe({
        next: (data) => {
          this.group_list=data.data;
         
        }

      });

  }

  get_by_list(arg:any){
    var req = {
      sheet_id: this.userDetails.data.id,
      length: 0,
      item: 20,
      parts_no: "",
      asem_id: "",
      col_name: this.col_name,
      col_value: arg,
      search: ""
    }
    this._list_fillter.voter_list(req).subscribe({
      next: (data) => {
        this.voter_data=data.data;
      }
    });
  }

  search_voter_list(arg:any){
   
    var req = {
      sheet_id: this.userDetails.data.id,
      length: 0,
      item: 20,
      parts_no: "",
      asem_id: "",
      col_name: "",
      col_value: "",
      search: arg.search
    }
    this._list_fillter.voter_list(req).subscribe({
      next: (data) => {
        this.voter_data=data.data;
      }
    });
  }


  get_by_booth_dropdown(){

    var req = {
      sheet_id: this.userDetails.data.id,
      length: 0,
      item: 100,
      col: "COMETI_ID",
      table: "cometi"
    }

      this._list_fillter.get_group_by_list(req).subscribe({
        next: (data) => {
          this.booth=data.data;
          
        }

      });

  }
  get_by_booth(arg:any){
    var req = {
      sheet_id: this.userDetails.data.id,
      length: 0,
      item: 20,
      parts_no: "",
      asem_id: "",
      col_name: this.col_name,
      col_value: arg,
      search: ""
    }
    this._list_fillter.voter_list(req).subscribe({
      next: (data) => {
        this.voter_data=data.data;
      }
    });

  }


  }


