import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Prize } from '../prize';

@Component({
  selector: 'app-prize-list',
  templateUrl: './prize-list.component.html',
  styleUrls: ['../css/layout.css']
})
export class PrizeListComponent implements OnInit {
  @Input() prizes;
  @Output() destroyPrizeEvent = new EventEmitter();
  @Output() updatePrizeEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  destroy(prize: Prize){
    const response = confirm('delete?')
    if(response) {
      this.destroyPrizeEvent.emit(prize);      
    }
  }

  update(prize: Prize) {
    this.updatePrizeEvent.emit(prize);
  }
}
