import { Component, OnInit } from '@angular/core';
import { Storage, listAll, getDownloadURL, ref } from '@angular/fire/storage';

declare var bootstrap: any;

@Component({
  selector: 'app-escuderias-menu',
  templateUrl: './escuderias-menu.component.html',
  styleUrls: ['./escuderias-menu.component.scss']
})
export class EscuderiasMenuComponent implements OnInit {

  images: string[];
  isLoading: boolean = false;

  constructor(private storage: Storage) {
    this.images = [];
   }

  ngOnInit(): void {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
    })  
  }

  async getImages(url: string) {
    return new Promise<void>((resolve, reject) => {
      this.isLoading = true;
      const imagesRef = ref(this.storage, 'camis/formula1/' + url);
  
      listAll(imagesRef)
        .then(async response => {
          this.images = [];
          for (let item of response.items) {
            try {
              const imageUrl = await getDownloadURL(item);
              this.images.push(imageUrl);
            } catch (error) {
              reject(error);
              return;
            }
          }
          resolve();
        })
        .catch(error => {
          console.log(error);
          reject(error);
        });
    });
  }

  async openmodal(url: any) {
    try {
      if (url == '') {
        const toastLiveExample = document.getElementById('copiado')
        const toast = new bootstrap.Toast(toastLiveExample)
        toast.show();
      } else {
        await this.getImages(url);
        this.isLoading = false;
        this.open();
      }
    } catch (error) {
      console.error('Error al descargar las imágenes:', error);
    }
  }

  open() {
    var modal = new bootstrap.Modal(document.getElementById('exampleModal'), {
      keyboard: false
    });
    
    modal.show();
  }

}
