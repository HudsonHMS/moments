import { NewmomentComponent } from './newmoment/newmoment.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MomentsComponent } from './moments/moments.component';
import { DetalheMomentComponent } from './detalhe-moment/detalhe-moment.component';

const momentsRoutes: Routes = [
  {
    path: 'moments',
    component: MomentsComponent
  },
  {
    path: 'moments/new',
    component: NewmomentComponent
  },
  {
    path: 'moments/:id',
    component: DetalheMomentComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(momentsRoutes)],
  exports: [RouterModule]
})
export class MomentsRoutingModule { }
