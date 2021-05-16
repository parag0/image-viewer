import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Virtual, Zoom, Autoplay, Thumbs, Controller, EffectCoverflow } from 'swiper/core';
import { SwiperComponent } from "swiper/angular";

SwiperCore.use([ EffectCoverflow, Pagination ]);
@Component({
  selector: 'app-eg-image',
  templateUrl: './eg-image.component.html',
  styleUrls: ['./eg-image.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EgImageComponent implements OnInit {

  @ViewChild("swiperRef", { static: false }) swiperRef?: SwiperComponent;

  public thumbsSwiper: any;

  ngOnInit() {}
  setThumbsSwiper(swiper: any) {
    this.thumbsSwiper = swiper;
  }
}
