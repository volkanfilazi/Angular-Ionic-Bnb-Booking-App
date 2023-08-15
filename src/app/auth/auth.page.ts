import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  isLoading = false
  isLogin = true
  checkAuthService?: boolean
  loginErrorService?: string;
  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingCntrl: LoadingController
  ) { }

  ngOnInit() {}
    
    onSwitchAuthMode() {
      this.isLogin = !this.isLogin
    }
    
    onSubmit(form: NgForm) {
      const email = form.value.email
      const password = form.value.password
      
      this.authService.login(email, password);
      this.checkAuthService = this.authService.checkAuth
      console.log(form);
      if (!form.valid) {
        return;
      } else {
      console.log(this.checkAuthService);
      if (this.checkAuthService === true) {
        console.log("working");
        this.isLoading = true;
        
        this.loadingCntrl.create({ keyboardClose: true, message: 'Loading in ...' })
          .then(loadingEl => {

            loadingEl.present();
            setTimeout(() => {
              this.isLoading = false
              loadingEl.dismiss();
              form.reset();
              this.router.navigateByUrl('/tabs/discover');
            }, 1500)
          })
      }
    }

  }

  onRegister(formRegister: NgForm) {
    const firstNameRegister = formRegister.value.firstNameRegister
    const lastNameRegister = formRegister.value.lastNameRegister
    const emailRegister = formRegister.value.emailRegister
    const passwordRegister = formRegister.value.passwordRegister
    const phoneNumber = formRegister.value.phoneNumberRegister
    this.authService.register(firstNameRegister, lastNameRegister, emailRegister, passwordRegister, phoneNumber);
    console.log(formRegister);
    if (!formRegister.valid) {
      return;
    } else {
      this.isLoading = true;
      this.loadingCntrl.create({ keyboardClose: true, message: 'Creating account ...' })
        .then(loadingEl => {
          loadingEl.present();
          setTimeout(() => {
            this.isLoading = false;
            loadingEl.dismiss();
          }, 1500)
        })
    }
  }
}
