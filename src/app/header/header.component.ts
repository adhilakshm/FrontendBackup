import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  username: string = '';

password: string = '';

newPassword: string = ''; // New password for changing password



private baseUrl = 'http://localhost:9999'; // Assuming you have baseUrl defined here



constructor(private http: HttpClient, private router: Router) {}



onSubmit() {

  const credentials = { username: this.username, password: this.password };



  this.http.post(`${this.baseUrl}/login`, credentials).subscribe(

    (response: any) => {

      console.log('Login successful:', response);

      // Successful login, navigate to the module page

      this.router.navigate(['/module']);

    },

    (error: any) => {

      console.error('Login failed:', error);

      // Handle login error, e.g., display an error message

    }

  );

}

}
