import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //importa nel service per poter creare istanza con dependencies injection
import { pluck } from 'rxjs/operators';

interface WipediaResponse {
  query: {
    search: {
      title: string;
      snippet: string;
      pageid: number;
  }[] //indica che search è un array di obj
  }
}

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
  
  constructor(private http: HttpClient) { } //DI passata nel costruttore;

  /* http.get è una funzione generica, quindi possiamo specificare cosa deve restituire
    con i generics <>.
    in questo caso non abbiamo creato l'observable poichè viene già restituito dalla chiamata
    http.get.
  */
  search(term: string){
    return this.http.get<WipediaResponse>('https://it.wikipedia.org/w/api.php',{
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: term,
        origin: '*'
      }
    }).pipe(
      pluck('query', 'search')
    );
  }
}

//?action=query&format=json&list=search&utf8=1&srsearch=