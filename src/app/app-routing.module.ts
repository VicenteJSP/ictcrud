import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployedComponent } from './components/list-employed/list-employed.component';
import { EmployedComponent } from './components/employed/employed.component';

const routes: Routes = [
  { path: '', component: ListEmployedComponent },
  { path: 'employed', component: EmployedComponent },
  { path: 'employed/:id', component: EmployedComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
