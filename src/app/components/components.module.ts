import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaisComponent } from './pais/pais.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [PaisComponent, NavbarComponent, SidebarComponent],
  imports: [CommonModule, RouterLink, RouterLinkActive],
  exports: [PaisComponent, NavbarComponent, SidebarComponent],
})
export class ComponentsModule {}
