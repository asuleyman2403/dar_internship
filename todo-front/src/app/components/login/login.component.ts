import { Component, OnInit } from '@angular/core';
import {ProviderService} from '../../services/provider.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private provider: ProviderService, private router: Router) {}

  username = '';
  password = '';
  loggedIn = false;
  ngOnInit() {
    localStorage.clear();
  }

  logIn = () => {
    if (this.username === '' || this.password === '') {
      alert('Both username and login required to sign in');
    } else {
      this.provider.login(this.username, this.password).then( res => {
        localStorage.setItem('token', res.token);
        this.loggedIn = true;
        this.router.navigateByUrl('main');
      });
    }
  }
}
