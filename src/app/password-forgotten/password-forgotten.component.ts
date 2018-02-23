import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';
import { Email } from '../model/email';
import { FlashMessagesService } from 'angular2-flash-messages/module';

@Component({
  selector: 'app-password-forgotten',
  templateUrl: './password-forgotten.component.html',
  styleUrls: ['./password-forgotten.component.css'],
  providers: [FlashMessagesService]
})
export class PasswordForgottenComponent implements OnInit {
  @ViewChild('f') forgotForm: NgForm;
  loading = false;
  data: any;

  constructor(
    private dataService: DataService,
    private router: Router, private activatedRoute: ActivatedRoute,
    private flashMessagesService: FlashMessagesService ) { }

  ngOnInit() {
  }

  onSignin() {
    this.router.navigate(['/anmelden']);
  };

  onForgotten() {
    if (!this.forgotForm.valid) {
      return;
    }

    const email = new Email(this.forgotForm.value.email);

    this.dataService.forgotPassword(email).subscribe(
      (response) => {
        this.data = response.json();
        if (this.data.success) {
          this.flashMessagesService.show(
            this.data.message, {cssClass: 'alert-success', timeout: 3000});
        } else {
          this.flashMessagesService.show(
            this.data.message, {cssClass: 'alert-danger', timeout: 3000});
        }
      },
      (error) => {
        this.flashMessagesService.show(
          this.data.message, {cssClass: 'alert-danger', timeout: 3000});
      }
    );
  }

}
