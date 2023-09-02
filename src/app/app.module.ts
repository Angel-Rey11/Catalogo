import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { FutbolMenuComponent } from './futbol-menu/futbol-menu.component';
import { FormulaMenuComponent } from './formula-menu/formula-menu.component';
import { NbaMenuComponent } from './nba-menu/nba-menu.component';
import { MenuLigasComponent } from './menu-ligas/menu-ligas.component';
import { MenuSeleccionesComponent } from './menu-selecciones/menu-selecciones.component';
import { MenuFutbolRetroComponent } from './menu-futbol-retro/menu-futbol-retro.component';
import { EscuderiasMenuComponent } from './escuderias-menu/escuderias-menu.component';
import { EscuderiasmotoMenuComponent } from './escuderiasmoto-menu/escuderiasmoto-menu.component';
import { CamisLigaEspComponent } from './camis-liga-esp/camis-liga-esp.component';
import { InfopageComponent } from './infopage/infopage.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuPrincipalComponent,
    FutbolMenuComponent,
    FormulaMenuComponent,
    NbaMenuComponent,
    MenuLigasComponent,
    MenuSeleccionesComponent,
    MenuFutbolRetroComponent,
    EscuderiasMenuComponent,
    EscuderiasmotoMenuComponent,
    CamisLigaEspComponent,
    InfopageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
