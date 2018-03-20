import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Prize } from '../prize';

@Component({
  selector: 'app-prize-new',
  templateUrl: './prize-new.component.html',
  styleUrls: ['../css/layout.css']
})
export class PrizeNewComponent implements OnInit {
  @Output() createNewPrizeEvent = new EventEmitter();
  types = ['freeplay', 'spins'];
  brands = ['youwager', 'betpop', 'brand3', 'brand4'];
  newPrize = new Prize;
  
  constructor() { }

  ngOnInit() {
  }

  create() {
    this.createNewPrizeEvent.emit(this.newPrize);
    this.newPrize = new Prize();
  }
}
