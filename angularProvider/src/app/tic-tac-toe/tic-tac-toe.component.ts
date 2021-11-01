import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.scss']
})
export class TicTacToeComponent implements OnInit {
  rows = new Array(3);
  columns = new Array(3);
//  message$ = new BehaviorSubject("1");
  winnigConditions:number[][][] = [[[0,0],[0,1],[0,2]],
                       [[1,0],[1,1],[1,2]],
                       [[2,0],[2,1],[2,2]],
                       [[1,0],[2,0],[3,0]],
                       [[1,1],[2,1],[3,1]],
                       [[1,2],[2,2],[3,2]],
                       [[0,0],[1,1],[2,2]],
                       [[0,2],[1,1],[2,0]]
                      ]; 

  token: string = '';
  activeToken: string = 'X';
  gameOver:boolean = false;
                 
  playerX:number[][] = [];
  playerY:number[][] = [];
  selectedItem:number[] = [];
  //@ViewChildren('buttonRef') buttonGroup: QueryList<ChildComponent>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
 //   console.log(this.buttonReference.nativeElement);
  }
  
  checkWinner(player:number[][]) {
    for(var winningCondition of this.winnigConditions) {
      this.gameOver=winningCondition.every(val=>player.includes(val))
      console.log("Game Over");
    }
      
  /*    if(player.includes(winningCondition))
      {
        this.gameOver=true;
      }*/
    
  }

  onClick(data: { rowIndex: number; columnIndex: number; }) {
      this.selectedItem.push(data.rowIndex,data.columnIndex);
      if(this.activeToken === 'X') {
        this.playerX.push(this.selectedItem);
        if(this.playerX.length>2) {
          this.checkWinner(this.playerX);
        }
        if(!this.gameOver) {
          this.activeToken = 'O';
        }
     
      } else {
        this.playerY.push(this.selectedItem);
        if(this.playerY.length>2) {
          this.checkWinner(this.playerY);
        }
        if(!this.gameOver) {
          this.activeToken = 'X';
        }
      }
      this.token = this.activeToken;
      this.selectedItem = [];

    }
    
//    this.message$.next("Cell Clicked");
  }


