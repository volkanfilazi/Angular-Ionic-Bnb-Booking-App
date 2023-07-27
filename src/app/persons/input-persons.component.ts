import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-persons',
  templateUrl: './input-persons.component.html',
})
export class InputPersonsComponent {
  @Output() newPerson = new EventEmitter<string>();
  inputValue = ''

  createPerson() {
    this.newPerson.emit(this.inputValue);
  }
}
