import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';

declare var bootstrap: any;


@Component({
  selector: 'app-infopage',
  templateUrl: './infopage.component.html',
  styleUrls: ['./infopage.component.scss']
})
export class InfopageComponent implements OnInit {

  constructor(private clipboardService: ClipboardService) { }

  telefono1 : string = '639 728 158'
  telefono2 : string = '651 483 122'

  ngOnInit(): void {
  }

  copyTelefono1ToClipboard() {
    this.clipboardService.copy(this.telefono1);
    const toastLiveExample = document.getElementById('copiado')
    const toast = new bootstrap.Toast(toastLiveExample)
    toast.show();
  }

  copyTelefono2ToClipboard() {
    this.clipboardService.copy(this.telefono2);
    const toastLiveExample = document.getElementById('copiado')
    const toast = new bootstrap.Toast(toastLiveExample)
    toast.show();
  }

}
