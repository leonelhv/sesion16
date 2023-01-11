import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [LoginComponent, HomeComponent],
  imports: [CommonModule, PagesRoutingModule, FormsModule, ComponentsModule],
  exports: [LoginComponent, HomeComponent],
})
export class PagesModule {}
