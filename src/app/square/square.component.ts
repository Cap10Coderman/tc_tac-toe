import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button> {{value}}</button>
  
  `,
  styles: ['button{padding: 60px 60px;font-size:50px; }']
  
})

export class SquareComponent {

  
  @Input() value: 'X' | 'O';


}
