import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Pagination, EffectCoverflow, Lazy } from 'swiper/core';
import { SwiperModule } from 'swiper/angular';

SwiperCore.use([EffectCoverflow, Pagination, Lazy]);
@Component({
  selector: 'app-eg-image',
  templateUrl: './eg-image.component.html',
  styleUrls: ['./eg-image.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EgImageComponent implements OnInit {
  @ViewChild('swiperRef', { static: false }) swiperRef?: SwiperModule;

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
        el: '.swiper-pagination',
        type: 'bullets',
      },
      preloadImages: false,
      lazy: {
        loadPrevNext: true,
        elementClass: 'swiper-lazy',
      },
    };
  }

  onSlideChange(event: any) {
    this.activeImage = this.slides[event.realIndex];
    console.log('slide change to index', this.activeImage);
  }

  setThumbsSwiper(swiper: any) {
    this.thumbsSwiper = swiper;
  }
}
