import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SummaryComponent } from './views/summary/summary.component';
import { DetailComponent } from './views/detail/detail.component';

const routes: Routes = [
  { path: 'summary', component: SummaryComponent },
  { path: 'detail', component: DetailComponent },
  { path: '', redirectTo: 'summary', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
