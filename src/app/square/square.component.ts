import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button> {{value}}</button>
  
  `,
  styles: ['button{font-size:150px ; }']
})
export class SquareComponent {

  
  @Input() value: 'X' | 'O';


}
