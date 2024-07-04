import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { User } from '../../dto/user';

@Component({
  selector: 'app-sign-in-page',
  standalone: true,
  imports: [RouterModule,RouterOutlet,FormsModule],
  templateUrl: './sign-in-page.component.html',
  styleUrl: './sign-in-page.component.css'
})
export class SignInPageComponent {

  constructor(private userService: UserService) {}

  user: User = {
    email: '',
    password:'',
  };

  @ViewChild(Router)
  router!: Router;

  login(){
    this.userService.login(this.user).subscribe(
        (resultData: any)=>{
          console.log(resultData);

          if(resultData.message== "Email not registered"){
            alert("Email not registered");
          }
          else if(resultData.message== "Login success"){
            this.router.navigateByUrl('');
          }
          else{
            alert("Email and password doesn't match");
          }
        }
      );
  }


}
