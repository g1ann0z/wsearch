import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service'; //1) importare il service

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  pages = []; //A)prepara array vuoto dove ricevere risultato della get e inviare al child

  constructor(private wikipedia: WikipediaService){} //2) creare costruttore con argomento
  
  onTerm(term: string){
    this.wikipedia.search(term).subscribe( (response: any) => {  //3) chiamare funzione search da istanza wikipedia
      this.pages = response.query.search; //B)immagazzinare i dati nella variabile di classe
    }); 
  }
}
