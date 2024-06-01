import { Component, Input } from '@angular/core'; //C) carica modulo Input

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrl: './page-list.component.css'
})
export class PageListComponent {
@Input() resultPages: any = []; //D)inizializza con decoratore Input attributo che verrà ricevuto dal Parent

}
