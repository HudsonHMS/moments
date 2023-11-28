import { MomentsComponent } from './moments/moments/moments.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SobreComponent } from './pages/sobre/sobre.component';

const routes: Routes = [
  {
    path: '',
    component: MomentsComponent
  },
  {
    path: 'sobre',
    component: SobreComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
