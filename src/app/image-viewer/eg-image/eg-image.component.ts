import SwiperCore, {
  Pagination,
  Navigation,
  EffectCoverflow,
} from 'swiper/core';
import {
  Component,
  ViewEncapsulation,
  ViewChild,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';
import { SwiperComponent } from 'swiper/angular';

SwiperCore.use([Pagination, Navigation, EffectCoverflow]);

declare var $: any;
@Component({
  selector: 'app-eg-image',
  templateUrl: './eg-image.component.html',
  styleUrls: ['./eg-image.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EgImageComponent implements OnInit {
  constructor(private cd: ChangeDetectorRef) {}

  @ViewChild('swiperRef', { static: false }) sliderRef?: SwiperComponent;

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
    this.appendSlides();
  }

  appendSlides() {
    this.slides = [
      ...this.slides,
      'https://swiperjs.com/demos/images/nature-1.jpg',
    ];
    this.cd.detectChanges();
  }

  setThumbsSwiper(swiper: any) {
    this.thumbsSwiper = swiper;
  }
}
