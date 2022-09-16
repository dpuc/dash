import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreaPersonComponent } from './components/crea-person/crea-person.component';
import { VisualizeComponent } from './components/visualize/visualize.component';

const routes: Routes = [
  { path:'', component: VisualizeComponent },
  { path:'crear', component: CreaPersonComponent },
  { path:'**', redirectTo: '', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
