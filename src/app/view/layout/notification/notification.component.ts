import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  notification :FormGroup;
  all_check:boolean =true;
  constructor() { 
    this.notification = new FormGroup({
      all: new FormControl(),
      title: new FormControl(),
      img: new FormControl(),
      user: new FormControl()
    })
  }

  ngOnInit(): void {
  }
  noficationSubmit(fc: any){
    console.log(fc.value);
  }
}
