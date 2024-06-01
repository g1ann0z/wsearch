import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //importa nel service per poter creare istanza con dependencies injection
@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
  
  constructor(private http: HttpClient) { } //DI passata nel costruttore;

  search(term: string){
    return this.http.get('https://it.wikipedia.org/w/api.php',{
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: term,
        origin: '*'
      }
    });
  }
}

//?action=query&format=json&list=search&utf8=1&srsearch=