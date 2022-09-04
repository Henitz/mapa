import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapaimoveisComponent } from './mapaimoveis/mapaimoveis.component';

const routes: Routes = [
{path: '', redirectTo: 'mapa', pathMatch: 'full',},
{path: 'mapa', component: MapaimoveisComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
