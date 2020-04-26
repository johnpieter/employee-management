import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { password, username } from '../../../variables/common.variable';

@Component({
  selector: 'app-widget-login',
  templateUrl: './widget-login.component.html',
  styleUrls: ['./widget-login.component.css']
})
export class WidgetLoginComponent implements OnInit {

  public returnUrl: string;
  public username: string = null;
  public password: string = null;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  async login() {
    const usernameVal = this.username;
    const passwordVal = this.password;

    if(usernameVal === username && passwordVal === password) {
      localStorage.setItem('username', JSON.stringify(usernameVal));
      localStorage.setItem('password', JSON.stringify(passwordVal));
      this.router.navigate([this.returnUrl]);
    }
    
  }

}
