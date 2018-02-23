import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ResetData } from '../model/resetdata';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {
  @ViewChild('f') resetForm: NgForm;
  token: String;
  data: any;
  errorMessage: String = '';
  loading = false;

  constructor(private dataService: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: Params) => {
          this.token = params['token'];
        }
      );
  }

  onReset() {
    this.loading = true;

    if (!this.resetForm.valid) {
      return;
    }

    if (this.resetForm.value.newPassword !== this.resetForm.value.confirmPassword) {
      return;
    }

    const resetData = new ResetData(
      this.resetForm.value.newPassword,
      this.resetForm.value.confirmPassword,
      this.token
    );

    this.dataService.resetPassword(resetData).subscribe(
      (response) => {
        this.data = response.json();
        if (this.data.success) {
          this.router.navigate(['index']);
        } else {
          this.loading = false;
          this.errorMessage = this.data.message;
          return;
        }
      },
      (error) => {
        this.loading = false;
        this.errorMessage = error.json().message;
      }
    );
  }
}
