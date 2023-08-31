import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-escuderiasmoto-menu',
  templateUrl: './escuderiasmoto-menu.component.html',
  styleUrls: ['./escuderiasmoto-menu.component.scss']
})
export class EscuderiasmotoMenuComponent implements OnInit {

  colorList: string[] = [
    'orange', 'rgb(34, 171, 235)', 'red', 'rgb(240, 87, 16)', 'rgb(204, 42, 13)',
    'gray', 'rgb(170, 161, 161)', 'red', 'crimsom', 'rgb(167, 167, 15)', 'skyblue'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
