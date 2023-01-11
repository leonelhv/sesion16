import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = 'test@test.com';
  password: string = '123456';

  constructor(private router: Router) {}

  login() {
    if (this.email === 'test@test.com' && this.password == '123456') {
      this.router.navigate(['/home']);
    }
  }
}
