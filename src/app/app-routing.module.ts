import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PhotosComponent } from './photos/photos.component';
import { TarifsComponent } from './tarifs/tarifs.component';
import { HorairesComponent } from './horaires/horaires.component';
import { AgendaComponent } from './agenda/agenda.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '' ,pathMatch: 'full' , redirectTo: 'home'},
  { path: 'home'     , component: HomeComponent     , data: { animation : 'One' } },
  { path: 'photos'   , component: PhotosComponent   , data: { animation : 'Two' }},
  { path: 'tarifs'   , component: TarifsComponent   , data: { animation : 'Three' }},
  { path: 'horaires' , component: HorairesComponent },
  { path: 'agenda'   , component: AgendaComponent   },
  { path: 'contact'  , component: ContactComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
