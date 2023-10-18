import { Component } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slideImgs: string[] = [
    'https://www.ultr.ar/admin/assets/img/slide1.png',
    'https://www.ultr.ar/admin/assets/img/slide2.png',
    'https://www.ultr.ar/admin/assets/img/slide3.png'
  ];

  constructor(private dataServiceService: DataServiceService) {}

  getHeaderImg(): string {
    return this.dataServiceService.headerImg;
  }
}
