import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EgImageComponent } from './image-viewer/eg-image/eg-image.component';
import { MgImageComponent } from './image-viewer/mg-image/mg-image.component'

const routes: Routes = [
  {
    path: 'eg_image',
    component: EgImageComponent,
  },
  {
    path: 'mg_image',
    component: MgImageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
