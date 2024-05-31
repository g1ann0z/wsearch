import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  @Output() submitted = new EventEmitter<string>();

  term = '';

  onFormSubmit(event: any) {
    event.preventDefault();
    this.submitted.emit(this.term);
  }

  /* onInput(value: string){ //in alternativa faccio direttamente dal template e non chiamo la funione qua
    this.term = value;
  } */

}
