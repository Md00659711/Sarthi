import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error = false;
  numbers:any;
  error_msg : any;
  constructor(private _login: LoginService, private router: Router) {
    this.loginForm = new FormGroup({
      mobile: new FormControl(),
      password: new FormControl(),
      child_id: new FormControl(''),
      device_id: new FormControl(''),
      device_token: new FormControl(''),
      device_name: new FormControl(''),
    })
  }

  ngOnInit(): void {
    this.test();
  }

  onSubmit(fc: any) {
    this._login.postLogin(fc.value).subscribe({
      next: (data) => {
        if (data.status === 1) {
          localStorage.setItem('pass', fc.value.password);
          localStorage.setItem('login', JSON.stringify(data));
          this.router.navigate(['dashboard']);

        } else {
          this.error = true;
          this.error_msg=data.message;
        }

      }, error: (err) => {
        this.error = true;
        this.error_msg=err.message;
      }
    })
  }

  test(){
    this._login.tset().subscribe({
      next: (data) => {
        console.log (data);
        this.numbers=data;
        console.log(data)
      }
    });
   }

}
