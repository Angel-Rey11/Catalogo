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
  acordeonAbiertoIndex: number | null = null;;
  itemsPerPage = 10;
  currentPage = 1;
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
    {
      equipo: "Valencia",
      img: "https://1.bp.blogspot.com/-Jx0LAuXlMx0/XsMEb9jiBBI/AAAAAAABa5c/s50Q_Zij1YogDtpoynJo4Q-DfZyKXFUXgCK4BGAsYHg/Valencia%2BCF256x.png",
      color: "#D18817"
    },
    {
      equipo: "Rayo",
      img: "https://1.bp.blogspot.com/-qFEwOFDUM9k/WVP6OnI50DI/AAAAAAABKLM/bvqyzIxsK1Y6I6Ubhn57346ZDyMRrt0xwCLcBGAs/s1600/Rayo%2BVallecano256x.png",
      color: "#000000"
    },
    {
      equipo: "Alavés",
      img: "https://1.bp.blogspot.com/-lpK4kKb7I_U/XyGVYAbFfHI/AAAAAAABfas/QnmKkzYENcANO87ArBuYB3S72liZpPIOgCLcBGAsYHQ/s0/Deportivo%2BAlaves256x.png",
      color: "#0761AF"
    },
    {
      equipo: "Celta",
      img: "https://1.bp.blogspot.com/-K5SSQpnYy7I/WVQJ8fT_UYI/AAAAAAABKOI/tJjxUmPHmAglPf1VE2AbCTAS03CRGdDygCLcBGAs/s1600/Celta%2Bde%2BVigo256x.png",
      color: "#8AC3EE"
    },
    {
      equipo: "Mallorca",
      img: "https://1.bp.blogspot.com/-2ZCAkK7Eqtc/X4emZLXklYI/AAAAAAABg3A/l13SSy_9WLcGcCq9-IVoO2aiv0ukoZIagCLcBGAsYHQ/s0/RCD%2BMallorca256x.png",
      color: "#E20613"
    },
    {
      equipo: "Villarreal",
      img: "https://1.bp.blogspot.com/-1pm-dO0mW6I/WVQSsT31atI/AAAAAAABKRk/yRDKwNfYrgwmzmHVJ4gc8UDa_fOCC2YVwCLcBGAs/s1600/Villarreal%2BCF256x.png",
      color: "#FFE667"
    },
    {
      equipo: "Granada",
      img: "https://logodetimes.com/times/granada/logo-granada-256.png",
      color: "#A61B2B"
    },
    {
      equipo: "Getafe",
      img: "https://1.bp.blogspot.com/-D4GoH_433V8/XVqw8xHe7VI/AAAAAAAAOAs/2uzK3WAHHw0oQAyR1RAlpqzvHaUYy6K7QCLcBGAs/s1600/Getafe%2BCF%2BB%2B256x.png",
      color: "#005999"
    },
    {
      equipo: "U.D Palmas",
      img: "https://3.bp.blogspot.com/-ypbBf2gpuzs/WX2LNWOY50I/AAAAAAAAIUw/3JQgVrlLvPUT_TFDCjnveX1JHtnJcuQmwCLcBGAs/s1600/Las%2BPalmas%2BAtl%25C3%25A9tico256x.png",
      color: "#ffe400"
    },
    {
      equipo: "Almería",
      img: "https://1.bp.blogspot.com/-svTqDfTFYQM/X5oNIp4r_hI/AAAAAAABhIU/w0WkGNzp1WAG6UfHWWxJG-2rKqTe0hXqACLcBGAsYHQ/s0/UD%2BAlmeria256x.png",
      color: "#ee1119"
    },
  ];

  constructor(private storage: Storage) { 
    this.images = [];
  }

  ngOnInit(): void {

  }

  // Método para calcular el número total de páginas
  getTotalPages(): number {
    return Math.ceil(this.acordeones.length / this.itemsPerPage);
  }

  // Método para avanzar a la siguiente página
  nextPage() {
    if (this.currentPage < this.getTotalPages()) {
      this.currentPage++;
    }
  }

  // Método para retroceder a la página anterior
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

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
