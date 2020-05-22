import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeliListComponent } from './components/peli-list/peli-list.component';
import { PeliFormComponent } from './components/peli-form/peli-form.component';
import { PeliPreviewComponent } from './components/peli-preview/peli-preview.component';

const routes: Routes = [
  {
    path:'photos',
    component:PeliListComponent
  },
  {
    path:'photos/new',
    component:PeliFormComponent
  },
  {
    path:'photos/:id',
    component:PeliPreviewComponent
  },
  {
    path:'',
    redirectTo:'/photos',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
