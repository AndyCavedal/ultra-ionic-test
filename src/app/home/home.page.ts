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

  slideOpts = {
    initialSlide: 0, // Índice de la diapositiva inicial
    speed: 400, // Velocidad de transición en milisegundos
    loop: true, // Bucle infinito
    centeredSlides: true, // Centra la diapositiva activa
    slidesPerView: 1, // Número de diapositivas visibles
    spaceBetween: 10, // Espacio entre las diapositivas
  };

  constructor() {}

}
