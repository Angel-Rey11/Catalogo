import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-ligas',
  templateUrl: './menu-ligas.component.html',
  styleUrls: ['./menu-ligas.component.scss']
})
export class MenuLigasComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigateToLigaEsp() {
    this.router.navigate(['/camis-liga-esp']);
  }

}
