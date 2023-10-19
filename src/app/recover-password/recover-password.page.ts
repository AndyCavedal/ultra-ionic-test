import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.page.html',
  styleUrls: ['./recover-password.page.scss'],
})
export class RecoverPasswordPage implements OnInit {

  constructor(private dataServiceService: DataServiceService) { }

  getImg():string {
    return this.dataServiceService.headerImg;
  }

  ngOnInit() {
  }

}
