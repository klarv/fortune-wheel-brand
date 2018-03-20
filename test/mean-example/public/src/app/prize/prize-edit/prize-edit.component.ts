import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Prize } from '../prize';

@Component({
  selector: 'app-prize-edit',
  templateUrl: './prize-edit.component.html',
  styleUrls: ['../css/layout.css']
})
export class PrizeEditComponent implements OnInit {
  @Input() prize: Prize; 
  editPrize: Prize = new Prize;
  @Output() updatePrizeEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
    Object.assign(this.editPrize, this.prize);
  }

  update() {
    this.editPrize.editable = false;
    this.updatePrizeEvent.emit(this.editPrize);    
  }
  
}
