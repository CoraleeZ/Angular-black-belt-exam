import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { ShowoneComponent } from './showone/showone.component';

const routes: Routes = [
  { path: 'pets', component: HomeComponent },
  { path: 'pets/new',pathMatch: 'full', component: NewComponent },
  { path: 'pets/:id/edit', component: EditComponent },
  { path: 'pets/:id', component: ShowoneComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
