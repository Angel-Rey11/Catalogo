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

  acordeones = [
    {
      equipo: "Madrid",
      img: "https://upload.wikimedia.org/wikipedia/commons/7/70/RealMadrid.png",
      color: "#FEBE10",
      srcL: 'local/realmadrid',
      srcV: 'visitante/realmadrid'
    },
    {
      equipo: "Barcelona",
      img: "https://cdn.icon-icons.com/icons2/104/PNG/256/fc_barcelona_footballteam_18015.png",
      color: "#A50044"
    },
    {
      equipo: "Sevilla",
      img: "https://cdn.icon-icons.com/icons2/1637/PNG/256/sevilla_109492.png",
      color: "#F43333"
    },
    {
      equipo: "Osasuna",
      img: "https://1.bp.blogspot.com/-qJd04UH2G_4/X4eqsDAb_jI/AAAAAAABg5Q/JF2eo342vzouhED_wdezCjic6G3ib_IvwCLcBGAsYHQ/s0/CA%2BOsasuna256x.png",
      color: "#0A346F"
    },
    {
      equipo: "Atlético",
      img: "https://www.osasuna.es/_next/image?url=https%3A%2F%2Fs3.amazonaws.com%2Fadm-production-osasuna%2Fimages%2Fclubes%2F71519dd089fb53a4102c53ed48dcdd80.png&w=256&q=75",
      color: "#272E61"
    },
    {
      equipo: "Cádiz",
      img: "https://www.comuniate.com/intranet/equipos/fotos/117.jpg",
      color: "#fde607"
    },
    {
      equipo: "Betis",
      img: "https://cdn.icon-icons.com/icons2/1637/PNG/256/betis_109480.png",
      color: "#0BB363"
    },
    {
      equipo: "Girona",
      img: "https://4.bp.blogspot.com/-v5Ki8a_pv_M/WVQMcwpl1mI/AAAAAAABKPQ/DPoz28vSzfg0HRqBojUmkNxecRSog-J8gCLcBGAs/s1600/Girona%2BFC256x.png",
      color: "#cd2534"
    },
    {
      equipo: "Athletic",
      img: "https://1.bp.blogspot.com/-nb8Vm6oDLk8/XfmNzrbYvkI/AAAAAAABW28/aT5_Ho_SwqojhqMnP80ZKVR5Fr9UKytQACLcBGAsYHQ/s1600/Athletic%2BClub56x.png",
      color: "#EE2523"
    },
    {
      equipo: "R.Sociedad",
      img: "https://3.bp.blogspot.com/-PeZkRg5RQJg/Wdis0-KJbbI/AAAAAAABPnA/E-YxY4qoPtYV3N6xgMKG4TkwQJJLAlfTwCLcBGAs/s1600/Real%2BSociedad256x.png",
      color: "#0067B1"
    },
  ];

  constructor(private storage: Storage) { 
    this.images = [];
  }

  ngOnInit(): void {

  }

  acordeonAbiertoIndex: number | null = null;

  toggleAcordeon(index: number) {
    if (this.acordeonAbiertoIndex === index) {
      this.acordeonAbiertoIndex = null;
    } else {
      this.acordeonAbiertoIndex = index;
    }
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

  async openmodal(url: any) {
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
