import { Component, OnInit, Input } from '@angular/core';
import { Prize } from '../prize';
@Component({
  selector: 'app-prize-details',
  templateUrl: './prize-details.component.html',
  styleUrls: ['../css/layout.css']
})
export class PrizeDetailsComponent implements OnInit {

    @Input() prizes;

    constructor() { }

    ngOnInit() {
    }


}
