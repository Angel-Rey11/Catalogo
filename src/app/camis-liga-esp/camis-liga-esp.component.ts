import { Component, OnInit } from '@angular/core';
import { Storage, listAll, getDownloadURL, ref } from '@angular/fire/storage';

@Component({
  selector: 'app-camis-liga-esp',
  templateUrl: './camis-liga-esp.component.html',
  styleUrls: ['./camis-liga-esp.component.scss']
})
export class CamisLigaEspComponent implements OnInit {

  images: string[];

  constructor(private storage: Storage) { 
    this.images = [];
  }

  ngOnInit(): void {
    this.getImages();
  }

  getImages() {
    const imagesRef = ref(this.storage, 'camis/ligaEsp');

    listAll(imagesRef)
    .then(async response => {
      console.log(response);

      for(let item of response.items) {
        const url = await getDownloadURL(item);
        this.images.push(url);
        console.log(this.images);
      }
    })
    .catch(error => console.log(error));
  }

}
