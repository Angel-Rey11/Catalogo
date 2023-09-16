import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-futbol-menu',
  templateUrl: './futbol-menu.component.html',
  styleUrls: ['./futbol-menu.component.scss']
})
export class FutbolMenuComponent implements OnInit {

  mostrarTabla1 = true;
  modalTitulo = 'EQUIPACIÓN ADIDAS';
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  cambiarTabla(cambiarA1: boolean) {
    this.mostrarTabla1 = cambiarA1;
    this.modalTitulo = cambiarA1 ? 'EQUIPACIÓN ADIDAS' : 'EQUIPACIÓN PUMA/NIKE/NB';
  }

  navigateToLigas() {
    this.router.navigate(['/menu-ligas']);
  }

  navigateToSelecciones() {
    this.router.navigate(['/menu-selecciones']);
  }

  navigateToRetro() {
    this.router.navigate(['/menu-futbol-retro']);
  }

}
