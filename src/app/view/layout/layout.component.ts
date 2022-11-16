import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  workingStyle = {
    height: '100px',
    width: '200px',
    top: '75px',
    left: '75px',
    right: '1px'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
