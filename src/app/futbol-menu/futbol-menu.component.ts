import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-futbol-menu',
  templateUrl: './futbol-menu.component.html',
  styleUrls: ['./futbol-menu.component.scss']
})
export class FutbolMenuComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
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
