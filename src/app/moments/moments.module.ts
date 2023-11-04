import { MomentsRoutingModule } from './moments.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MomentsComponent } from './moments/moments.component';
import { NewmomentComponent } from './newmoment/newmoment.component';



@NgModule({
  declarations: [
    MomentsComponent,
    NewmomentComponent
  ],
  imports: [
    CommonModule,
    MomentsRoutingModule
  ]
})
export class MomentsModule { }
