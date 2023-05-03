import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnalytics, getAnalytics, ScreenTrackingService, UserTrackingService } from "@angular/fire/analytics";
import { environment } from "../environments/environment";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactComponent } from './contact/contact.component';
import { HorairesComponent } from './horaires/horaires.component';
import { PhotosComponent } from './photos/photos.component';
import { TarifsComponent } from './tarifs/tarifs.component';
import { AgendaComponent } from './agenda/agenda.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { initializeApp, provideFirebaseApp, getApp } from '@angular/fire/app';
import { ZeroPipe } from './pipes/zero-pipe'

@NgModule({
  declarations: [
    ZeroPipe,
    AppComponent,
    ContactComponent,
    HorairesComponent,
    PhotosComponent,
    TarifsComponent,
    AgendaComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics())
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
