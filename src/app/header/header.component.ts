import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'app/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
  }

  onLogout() {
    this.dataService.logOut();
    this.router.navigate(['anmelden']);
  }

}
