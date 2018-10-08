import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';
import { TodoComponent } from './todo/todo.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'todo',
    pathMatch: 'full'
  },
  {
    path: 'country',
    component: CountryComponent
  },
  {
    path: 'todo',
    component: TodoComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
