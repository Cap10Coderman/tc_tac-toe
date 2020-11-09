import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button> {{value}}</button>
  
  `,
  styles: ['button{padding: 40px ;font-size:20px; }']
  
})

export class SquareComponent {

  
  @Input() value: 'X' | 'O';


}
