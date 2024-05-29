import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './root/app.component';

import { HeaderComponent } from './components/ui/header/header.component';
import { FooterComponent } from './components/ui/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { BasecardComponent } from './components/ui/base/basecard/basecard.component';
import { BasecontainerComponent } from './components/ui/base/basecontainer/basecontainer.component';
import { AboutComponent } from './pages/about/about.component';
@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, HomeComponent, BasecardComponent, BasecontainerComponent, AboutComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
