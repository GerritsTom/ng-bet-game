import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';
import { User } from '../model/user';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [FlashMessagesService]
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') registerForm: NgForm;
  errorMessage: String = '';
  data: any;
  loading = false;

  constructor(private router: Router,
    private dataService: DataService,
    private flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.loading = true;

    if (!this.registerForm.valid) {
      return;
    }

    const user = new User(this.registerForm.value.email, this.registerForm.value.password);

    this.dataService.register(user).subscribe(
      (response) => {
        this.data = response.json();
        if (this.data.success) {
          localStorage.setItem('currentUser', JSON.stringify({token: this.data.token, name: this.registerForm.value.email}));
          this.router.navigate(['index']);
        } else {
          this.loading = false;
          this.flashMessagesService.show(
            this.data.message, {cssClass: 'alert-danger', timeout: 1500});
        }
      },
      (error) => {
        this.loading = false;
        this.errorMessage = this.data.message;
      }
    );
  }

  onSignin() {
    this.router.navigate(['/anmelden']);
  }
}
