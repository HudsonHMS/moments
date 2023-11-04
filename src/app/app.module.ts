import { MomentsModule } from './moments/moments.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SobreComponent } from './pages/sobre/sobre.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MomentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
