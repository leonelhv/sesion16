import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaisComponent } from '../components/pais/pais.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'peru',
        component: PaisComponent,
      },
      {
        path: 'chile',
        component: PaisComponent,
      },
      {
        path: 'uruguay',
        component: PaisComponent,
      },
      {
        path: '**',
        redirectTo: 'peru',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
