import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeoreComponent } from './heore/heore.component';
import { HeoresComponent } from './heores/heores.component';

const routes : Routes = [
  { path      : 'heroe'     , component : HeoreComponent  },
  { path      : 'heroes/:id', component : HeoresComponent },
  { path : '**', pathMatch : 'full', redirectTo: 'heroe'  }   
  
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
