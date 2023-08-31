import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaMenuComponent } from './formula-menu/formula-menu.component';
import { FutbolMenuComponent } from './futbol-menu/futbol-menu.component';
import { MenuFutbolRetroComponent } from './menu-futbol-retro/menu-futbol-retro.component';
import { MenuLigasComponent } from './menu-ligas/menu-ligas.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { MenuSeleccionesComponent } from './menu-selecciones/menu-selecciones.component';
import { NbaMenuComponent } from './nba-menu/nba-menu.component';

const routes: Routes = [
  {path:'menu-principal', component:MenuPrincipalComponent},
  {path:'futbol-menu', component:FutbolMenuComponent},
  {path:'formula-menu', component:FormulaMenuComponent},
  {path:'nba-menu', component:NbaMenuComponent},
  {path:'menu-ligas', component:MenuLigasComponent},
  {path:'menu-selecciones', component:MenuSeleccionesComponent},
  {path:'menu-futbol-retro', component:MenuFutbolRetroComponent},
  {
    path: '',
    redirectTo: '/menu-principal',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
