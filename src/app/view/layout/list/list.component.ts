import { Component, OnInit, TemplateRef } from '@angular/core';
import { DashService } from 'src/app/services/dash.service';
import { LoginService } from 'src/app/services/login.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

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
  select_list:any;
  p:number = 1;
  list_details:any;
  modalRef: BsModalRef | undefined; 
  constructor(private _loginservice: LoginService , private _list_fillter:DashService , private modalService: BsModalService) { 
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
    var new_arg = this.lists.filter( (x:any) => {
            if(x.id === arg){
              return x;
            }
           
    });
    this.col_name=new_arg[0].id;
    this.select_list=arg;
    var reg = {
      sheet_id: this.userDetails.data.id,
      length: 0,
      item: 100,
      col: new_arg[0].id,
      table: new_arg[0].table
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
      item: 100,
      parts_no: "",
      asem_id: "",
      col_name: this.col_name,
      col_value: arg,
      search: ""
    }
    // console.log(req);

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
      item: 100,
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
      item: 100,
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

  openModal(template: TemplateRef<any> ,  user:any) {
    // this.user=user;
    this.modalRef = this.modalService.show(template ,
      {
        class: 'modal-dialog-centered modal-lg' 
      });
      this.list_details=user;
      console.log(user);
      // this.user_child = new FormGroup({
      //   mobile: new FormControl(this.user.mobile),
      //   name: new FormControl(this.user.name),
      //   password: new FormControl(),
      //   enable: new FormControl(this.user.status)
      // });
 }


  }


