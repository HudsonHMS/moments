import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MomentsComponent } from './moments/moments.component';

const momentsRoutes: Routes = [
  {
    path: 'moments',
    component: MomentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(momentsRoutes)],
  exports: [RouterModule]
})
export class MomentsRoutingModule { }
