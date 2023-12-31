import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.scss']
})
export class MenuPrincipalComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigateToFutbolMenu() {
    this.router.navigate(['/futbol-menu']);
  }

  navigateToFormulaMenu() {
    this.router.navigate(['/formula-menu']);
  }

  navigateToNbaMenu() {
    this.router.navigate(['/nba-menu']);
  }

  navigateToInfo() {
    this.router.navigate(['/infopage']);
  }

}
