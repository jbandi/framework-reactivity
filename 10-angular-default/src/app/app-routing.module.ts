import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CounterScreenComponent } from './counter-screen/counter-screen.component';

const routes: Routes = [
  {path: '', component: CounterScreenComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
