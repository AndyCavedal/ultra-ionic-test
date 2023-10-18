import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  headerImg: string = 'https://tarjetaultra.com/wp-content/uploads/2022/09/Copia-de-logo-ULTRA-1.png';

  slideImgs: string[] = [
    'https://www.ultr.ar/admin/assets/img/slide1.png',
    'https://www.ultr.ar/admin/assets/img/slide2.png',
    'https://www.ultr.ar/admin/assets/img/slide3.png'
  ];

  constructor() {}

}
