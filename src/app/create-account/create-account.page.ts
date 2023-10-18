import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
})
export class CreateAccountPage implements OnInit {

  password: string = '';
  showPassword: boolean = false;

  constructor(private dataServiceService: DataServiceService) { }

  getHeaderImg(): string {
    return this.dataServiceService.headerImg;
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  ngOnInit() {
  }

}
