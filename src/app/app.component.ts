import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  onTerm(term: string){
    console.log('questo è il termine da cercare', term);
  }
}
