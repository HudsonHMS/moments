import { MomentsRoutingModule } from './moments.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MomentsComponent } from './moments/moments.component';



@NgModule({
  declarations: [
    MomentsComponent
  ],
  imports: [
    CommonModule,
    MomentsRoutingModule
  ]
})
export class MomentsModule { }
