import { NewmomentComponent } from './newmoment/newmoment.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MomentsComponent } from './moments/moments.component';

const momentsRoutes: Routes = [
  {
    path: 'moments',
    component: MomentsComponent
  },
  {
    path: 'moments/new',
    component: NewmomentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(momentsRoutes)],
  exports: [RouterModule]
})
export class MomentsRoutingModule { }
