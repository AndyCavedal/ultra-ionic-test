import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Data } from '@angular/router';

@Component({
  selector: 'app-login-account',
  templateUrl: './login-account.page.html',
  styleUrls: ['./login-account.page.scss'],
})
export class LoginAccountPage implements OnInit {

  constructor(private dataServiceService: DataServiceService) { }

  getImg():string {
    return this.dataServiceService.headerImg;
  }

  ngOnInit() {
  }

}
