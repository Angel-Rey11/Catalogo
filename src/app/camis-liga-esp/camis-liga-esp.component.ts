import { Component, OnInit } from '@angular/core';
import { Storage, listAll, getDownloadURL, ref } from '@angular/fire/storage';

declare var bootstrap: any;

@Component({
  selector: 'app-camis-liga-esp',
  templateUrl: './camis-liga-esp.component.html',
  styleUrls: ['./camis-liga-esp.component.scss']
})
export class CamisLigaEspComponent implements OnInit {

  images: string[];
  isLoading: boolean = false;

  constructor(private storage: Storage) { 
    this.images = [];
  }

  ngOnInit(): void {

  }

  async getImages(url: string) {
    return new Promise<void>((resolve, reject) => {
      this.isLoading = true;
      const imagesRef = ref(this.storage, 'camis/ligasEsp/' + url);
  
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

  async openmodal(url: string) {
    try {
      await this.getImages(url);
      this.isLoading = false;
      this.open();
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
