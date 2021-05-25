import SwiperCore, {
  Pagination,
  Navigation,
  EffectCoverflow,
} from 'swiper/core';
import {
  Component,
  ViewChild,
  OnInit,
  TemplateRef,
} from '@angular/core';
import { SwiperComponent } from 'swiper/angular';

SwiperCore.use([Pagination, Navigation, EffectCoverflow]);

declare var $: any;
@Component({
  selector: 'app-mg-image',
  templateUrl: './mg-image.component.html',
  styleUrls: ['./mg-image.component.scss'],
})
export class MgImageComponent implements OnInit {
  @ViewChild('swiperRef') sliderRef?: SwiperComponent;
  @ViewChild('#slidesArray')

  public thumbsSwiper: any;
  public swiper: any;
  public slides = [
    'https://swiperjs.com/demos/images/nature-10.jpg',
    'https://swiperjs.com/demos/images/nature-2.jpg',
    'https://swiperjs.com/demos/images/nature-3.jpg',
    'https://swiperjs.com/demos/images/nature-4.jpg',
    'https://swiperjs.com/demos/images/nature-5.jpg',
    'https://swiperjs.com/demos/images/nature-6.jpg',
    'https://swiperjs.com/demos/images/nature-7.jpg',
    'https://swiperjs.com/demos/images/nature-8.jpg',
  ];
  public activeImage: any = this.slides[0];

  constructor(content: TemplateRef<any>) {}
  ngOnInit() {
    this.swiper = {
      autoHeight: 'true',
      effect: 'coverflow',
      spaceBetween: 50,
      grabCursor: 'true',
      centeredSlides: 'true',
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        dynamicBullets: true,
        el: '.swiper-pagination',
        type: 'fraction',
      },
      navigation: true,
    };

    $('#bg-image').css(
      'background-image',
      'url(https://swiperjs.com/demos/images/nature-10.jpg)'
    );
  }

  onSlideChange(event: any) {
    this.activeImage = this.slides[event.realIndex];
    $('#bg-image').css('background-image', 'url(' + this.activeImage + ')');
  }

  onSlideEnd(event: any) {
    console.log('onSlideEnd', event);
    this.sliderRef?.swiperRef.appendSlide([
      `<div class="swiper-slide"><img class="swiper-slide1" src="${
        this.slides[0]
      }" /></div>`
    ]);
  }

  appendSlides() {
    this.sliderRef?.swiperRef.appendSlide([
      `<div class="swiper-slide"><img class="swiper-slide1" src="${this.slides[0]}" /></div>`,
    ]);
  }

  setThumbsSwiper(swiper: any) {
    this.thumbsSwiper = swiper;
  }
}
