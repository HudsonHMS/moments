import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MomentsRoutingModule } from './moments.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'

import { MomentsComponent } from './moments/moments.component';
import { NewmomentComponent } from './newmoment/newmoment.component';
import { MomentFormComponent } from './moment-form/moment-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetalheMomentComponent } from './detalhe-moment/detalhe-moment.component';



@NgModule({
  declarations: [
    MomentsComponent,
    NewmomentComponent,
    MomentFormComponent,
    DetalheMomentComponent
  ],
  imports: [
    CommonModule,
    MomentsRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ]
})
export class MomentsModule { }
