import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  squares:any[];
  xisnext:boolean;
  winner:string;

  constructor() { }

  ngOnInit() {
    this.newgame();
  }

  newgame()
  {
    this.squares=Array(9).fill(null);
    this.winner=null;
    this.xisnext=true;

  }

  get player()
  {
    return this.xisnext ? 'X' : 'O';

  }


  makethemove(idx:number)
  {
    if(!this.squares[idx])
    {
      this.squares.splice(idx,1,this.player);
      this.xisnext=!this.xisnext;
    }
  }
}
