import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EgImageComponent } from './image-viewer/eg-image/eg-image.component'
import { MgImageComponent } from './image-viewer/mg-image/mg-image.component'
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    AppComponent,
    EgImageComponent,
    MgImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
