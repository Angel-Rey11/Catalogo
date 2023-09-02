import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CamisLigaEspComponent } from './camis-liga-esp/camis-liga-esp.component';
import { EscuderiasMenuComponent } from './escuderias-menu/escuderias-menu.component';
import { EscuderiasmotoMenuComponent } from './escuderiasmoto-menu/escuderiasmoto-menu.component';
import { FormulaMenuComponent } from './formula-menu/formula-menu.component';
import { FutbolMenuComponent } from './futbol-menu/futbol-menu.component';
import { InfopageComponent } from './infopage/infopage.component';
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
  {path:'escuderias-menu', component:EscuderiasMenuComponent},
  {path:'escuderiasmoto-menu', component:EscuderiasmotoMenuComponent},
  {path:'camis-liga-esp', component:CamisLigaEspComponent},
  {path:'infopage', component:InfopageComponent},
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
