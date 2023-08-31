import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formula-menu',
  templateUrl: './formula-menu.component.html',
  styleUrls: ['./formula-menu.component.scss']
})
export class FormulaMenuComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigateToEscuderias() {
    this.router.navigate(['/escuderias-menu']);
  }

  navigateToEscuderiasMoto() {
    this.router.navigate(['/escuderiasmoto-menu']);
  }

}
