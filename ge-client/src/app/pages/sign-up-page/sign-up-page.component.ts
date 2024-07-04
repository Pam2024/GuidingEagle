import { Component,ViewChild } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { User } from '../../dto/user';
import { FormsModule ,} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  standalone:true,
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css'],
  imports:[FormsModule,RouterLink,]
})
export class SignUpPageComponent {


   user: User = {
    firstName: '',
    lastName: '',
    email: '',
    password:'',
    repeatPassword: ''
  };

  constructor(private userService: UserService) {}

  signUp(){
    this.userService.signUp(this.user).subscribe(
        response => {
          console.log('User signed up successfully:', response);
          // Handle success (e.g., show a success message)
        },
        error => {
          console.error('Error signing up:', error);
          // Handle error (e.g., show an error message)
        }
      );
  }
  @ViewChild(Router)
  router!: Router;


  cancelSignup(): void{
    this.router.navigate(['']);
  }
}
