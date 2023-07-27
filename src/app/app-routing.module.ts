import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonsComponent } from './persons/persons.component';
import { InputPersonsComponent } from './persons/input-persons.component';
const routes: Routes = [
  {path: '', component: PersonsComponent},
  {path: 'createperson', component: InputPersonsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
