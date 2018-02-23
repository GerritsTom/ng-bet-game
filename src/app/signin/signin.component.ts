import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from 'app/model/user';
import { DataService } from 'app/data.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers: [FlashMessagesService]
})
export class SigninComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  errorMessage: String = '';
  data: any;
  loading = false;
  loadingMessage: String = 'Anmeldedaten werden übermittelt...';

  constructor(
            private dataService: DataService,
            private router: Router,
            private activatedRoute: ActivatedRoute,
            private flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.loading = true;
    if (!this.signupForm.valid) {
      return;
    }

    const user = new User(
      this.signupForm.value.email,
      this.signupForm.value.password
    );

    this.dataService.logIn(user).subscribe(
      (response) => {
        this.data = response.json();
        if (this.data.success) {
          localStorage.setItem('currentUser', JSON.stringify({token: this.data.token, name: this.signupForm.value.email}));
          this.router.navigate(['index']);
        } else {
          this.loading = false;
          this.flashMessagesService.show(this.data.message, {cssClass: 'alert-danger', timeout: 1500});
        }
      },
      (error) => {
        this.loading = false;
        this.flashMessagesService.show(
          this.data.message, {cssClass: 'alert-danger', timeout: 3000});
      }
    );
  }

  onRegister() {
    this.router.navigate(['/registrieren']);
  };

  onReset() {
    this.router.navigate(['/reset/123']);
  };

  onForgotten() {
    this.router.navigate(['/forgot']);
  }
}
