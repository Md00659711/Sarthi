import { Component, OnInit,TemplateRef } from '@angular/core';
import { DashService } from 'src/app/services/dash.service';
import { LoginService } from 'src/app/services/login.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-assign',
  templateUrl: './assign.component.html',
  styleUrls: ['./assign.component.css']
})
export class AssignComponent implements OnInit {
  user:any;
  users:any;
  userDetails:any;
  user_child:any;
  modalRef: BsModalRef | undefined;  
  constructor(private _assign:DashService, private _loginservice: LoginService, private modalService: BsModalService ) { 
    this.userDetails = this._loginservice.getLoggedInUser();
    this.user_child = new FormGroup({
      mobile: new FormControl(),
      name: new FormControl(),
      password: new FormControl(),
      enable: new FormControl()
    });
   
  }
  openModal(template: TemplateRef<any> ,  user:any) {
    this.user=user;
    this.modalRef = this.modalService.show(template ,
      {
        class: 'modal-dialog-centered' 
      });
      console.log(this.user);
      this.user_child = new FormGroup({
        mobile: new FormControl(this.user.mobile),
        name: new FormControl(this.user.name),
        password: new FormControl(),
        enable: new FormControl(this.user.status)
      });
 }
  ngOnInit(): void {
    this.get_assign_user();
  }

  get_assign_user(){
   var  arg={
      sheet_id: this.userDetails.data.id,
      length: "0",
      item: "30",
      search: ""
    }
    this._assign.get_assign_user(arg).subscribe({
      next: (data) => {
        this.users = data.data;
      }
    });
  }
  onSubmit(fc: any) {

  }

}
