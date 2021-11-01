import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit {
  @Input() rowIndex: number=0;
  @Input() columnIndex: number=0;
  @Input('activeToken')
  buttonLabel!: string;
  @Output()
  cellClicked: EventEmitter<{ rowIndex: number; columnIndex: number; }> = new EventEmitter();
  state:boolean=false;
  @ViewChild('buttonRef') buttonRef!: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  onClick(rowIndex:number,columnIndex:number) {
    this.buttonRef.nativeElement.innerHTML = this.buttonLabel;
    this.state=true;
    this.cellClicked.emit({rowIndex:rowIndex,columnIndex:columnIndex});
  }

}
