import { Component } from '@angular/core';
// import {KlasaKorisnik} from './klasa/klasa.korisnik';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Eliminacioni WEB';

  niz = [];
 // KlasaKorisnik k = new  KlasaKorisnik();
  godina: number;
  brojGodona: number;
   suma = 0;
  pomoc = [];

  istina = [];

  addNiz(ime: string , prezime: string , jbmg: number) {
    if (ime !== '' && prezime !== '' && jbmg !== null ) {

     if (jbmg >= 1000000000000 && jbmg < 10000000000000 ) {   // da mora samo 13 cifara
       this.niz.push({
         ime: ime, prezime: prezime, jmbg: jbmg
       });
       for (let i = 0; i < this.niz.length; i++) {
         this.godina = this.niz[i].jmbg / 1000000;
         this.godina = this.godina % 1000;        // OSTAVI TRI POSLEDNJA BROJA do zareza

         this.godina = Math.floor(this.godina);

         document.getElementById('poruka').innerHTML = '<span style="color:chartreuse" >Uspesno ste dodali korisnika</span>';
         // console.log('godina je = ' + this.godina + ' koliko korisnika ima: ' + this.niz.length );
         if (this.godina < 1000) {
           this.godina += 1000;
         }
         if (this.godina < 1017) {
           this.godina += 1000;
         }
         this.brojGodona = 2017 - this.godina;
       } // od Foras
       this.pomoc.push(this.brojGodona);

       this.suma += this.pomoc[this.pomoc.length - 1];
       console.log(this.suma);

       for (let j = 0; j < this.pomoc.length; j++) {
         if (this.pomoc[j] > (this.suma / this.niz.length)) {
           this.istina[j] = true;
         } else {
           this.istina[j] = false;
         }
         console.log(this.istina[j]);
       }
       console.log('==== Prosecne godine: ' + this.suma / this.niz.length);
       document.getElementById('brojProsecni').innerHTML = ' Prosecan broj godina ' + '<i style="font-size: 28px">' + Math.round(this.suma / this.niz.length) + '</i>';
     }else {
       document.getElementById('poruka').innerHTML = '<span style="color: red" > Greska morate uneti 13 cifara za JMBG</span>';
     }

     }else {
      document.getElementById('poruka').innerHTML = '<span style="color: red" > Greska morate popuniti sva polja</span>';
    }
  } // kraj metode

  provera() {
     return (this.brojGodona > this.suma / this.niz.length) ? true : false;
  }

}
