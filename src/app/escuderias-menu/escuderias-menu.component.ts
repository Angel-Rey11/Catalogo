import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-escuderias-menu',
  templateUrl: './escuderias-menu.component.html',
  styleUrls: ['./escuderias-menu.component.scss']
})
export class EscuderiasMenuComponent implements OnInit {

  colorList: string[] = [
    '#1F3F6E', '#00A19B', '#00594F', 'orange', 'red',
    '#005AB9', '#A42134', '#20394C', '#00A0DE', 'gray'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
