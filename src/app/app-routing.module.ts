import { LoadYourLocationComponent } from './load-your-location/load-your-location.component';
import { SaveYourLocationComponent } from './save-your-location/save-your-location.component';
import { SaveLocationComponent } from './save-location/save-location.component';
import { SeeYourLocationComponent } from './see-your-location/see-your-location.component';
import { SeeTrainLocationComponent } from './see-train-location/see-train-location.component';
import { ShareTrainLocationComponent } from './share-train-location/share-train-location.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadLocationComponent } from './load-location/load-location.component';

const routes: Routes = [
  {
    path:'share-train-location',
    component:ShareTrainLocationComponent
  },
  {
    path:'see-train-location',
    component:SeeTrainLocationComponent
  },
  {
    path:'see-your-location',
    component:SeeYourLocationComponent
  },
  {
    path:'load-location',
    component:LoadLocationComponent
  },
  {
    path:'save-location',
    component:SaveLocationComponent
  },
  {
    path:'save-your-location',
    component:SaveYourLocationComponent
  },
  {
    path:'load-your-location',
    component:LoadYourLocationComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
